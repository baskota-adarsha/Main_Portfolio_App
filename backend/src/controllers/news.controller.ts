import axios from "axios"
import * as cheerio from 'cheerio'
import { Request, Response } from "express"
import cron from "node-cron";
import { supabase } from "../config/db";

interface Post {
  id?: string;
  title: string;
  description: string;
  content: string;
  url: string;
  url_to_image?: string;
  published_at: string;
  author: string;
  source: {
    id: string | null;
    name: string;
  };
  created_at?: string;
}

async function scrapeFullContent(url: string): Promise<string> {
  try {
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      Referer: "https://www.google.com/",
      "Cache-Control": "max-age=0",
    };

    const response = await axios.get(url, { headers, timeout: 10000 });
    const $ = cheerio.load(response.data);

    let content = "";

    if (url.includes("theverge.com")) {
      content = extractVergeContent($);
    } else {
      content = extractGenericContent($);
    }

    if (!content || content.length < 200) {
      content = extractFallbackContent($);
    }

    content = cleanContent(content);

    return content || "Could not extract full content from the URL";
  } catch (error: any) {
    console.error(`Error scraping content from ${url}:`, error);
    return `Error fetching full content: ${error.message}`;
  }
}

function extractVergeContent($: cheerio.CheerioAPI): string {
  let content = "";

  const primarySelectors = [
    ".duet--article--article-body-component",
    ".duet--article--lede-body",
    ".c-entry-content",
    ".l-col__main",
    ".article-content",
    ".entry-content",
    ".c-entry-content .e-content",
    "#content .c-entry-content",
  ];

  for (const selector of primarySelectors) {
    const element = $(selector);
    if (element.length) {
      element
        .find(
          "aside, .c-related-list, .c-share-social, script, style, .ad, .advertisement, .c-message-callout, .c-newsletter-signup"
        )
        .remove();

      const paragraphs: string[] = [];
      element.find("p, h2, h3, h4, blockquote, ul li, ol li").each((_, el) => {
        const text = $(el).text().trim();
        if (text) paragraphs.push(text);
      });

      content = paragraphs.join("\n\n");
      if (content.length > 0) break;
    }
  }

  return content;
}

function extractGenericContent($: cheerio.CheerioAPI): string {
  let content = "";

  const selectors = [
    "article",
    "main article",
    ".article-content",
    ".post-content",
    ".entry-content",
    ".content",
    ".story-body",
    "#article-body",
    ".article__content",
  ];

  for (const selector of selectors) {
    const element = $(selector);
    if (element.length) {
      element
        .find(
          "script, style, meta, noscript, iframe, .ads, .related-articles, .social-share, .newsletter"
        )
        .remove();

      const paragraphs: string[] = [];
      element.find("p, h2, h3, h4, blockquote, ul li, ol li").each((_, el) => {
        const text = $(el).text().trim();
        if (text) paragraphs.push(text);
      });

      content = paragraphs.join("\n\n");
      if (content.length > 0) break;
    }
  }

  return content;
}

function extractFallbackContent($: cheerio.CheerioAPI): string {
  $(
    "header, footer, nav, aside, .sidebar, .ads, .comments, .related, script, style"
  ).remove();

  const paragraphs: string[] = [];
  $("p").each((_, el) => {
    const text = $(el).text().trim();
    if (text && text.length > 50) {
      paragraphs.push(text);
    }
  });

  return paragraphs.length > 0 ? paragraphs.join("\n\n") : $("body").text();
}

function cleanContent(content: string): string {
  if (!content) return "";

  content = content.replace(/\s+/g, " ").trim();

  const fillersToRemove = [
    "Please enable JavaScript to view this site.",
    "Advertisement",
    "Please turn JavaScript on and reload the page.",
    "Sign up for our newsletter",
    "Subscribe to our newsletter",
  ];

  for (const filler of fillersToRemove) {
    content = content.replace(new RegExp(filler, "gi"), "");
  }

  return content.trim();
}

function extractDescription(content: string): string {
  if (!content) return "No description available";

  const maxLength = 150;
  let description = content.substring(0, maxLength);

  const lastPeriod = description.lastIndexOf(".");
  if (lastPeriod > maxLength * 0.5) {
    description = description.substring(0, lastPeriod + 1);
  } else if (description.length === maxLength) {
    description += "...";
  }

  return description;
}

// Enhanced fetchPostsAndSave with Supabase
export const fetchPostsAndSave = async (
  req?: Request,
  res?: Response
): Promise<any> => {
  const startTime = new Date();
  try {
    console.log(
      `🔄 Starting scheduled post fetch and cleanup at ${startTime.toISOString()}`
    );

    if (!process.env.NEWS_API) {
      const error = "News API URL not defined in environment variables";
      console.error("❌", error);
      if (res) return res.status(400).json(error);
      throw new Error(error);
    }

    // Step 1: Clear all existing posts from Supabase
    try {
      const { error: deleteError } = await supabase
        .from("posts")
        .delete()
        .neq("id", "00000000-0000-0000-0000-000000000000");

      if (deleteError) {
        console.error("❌ Error clearing old posts:", deleteError.message);
      } else {
        console.log(`🗑️ Removed all old posts from database`);
      }
    } catch (deleteError: any) {
      console.error("❌ Error clearing old posts:", deleteError.message);
    }

    // Step 2: Fetch new posts from API
    console.log("📡 Fetching new posts from API...");
    const response = await axios.get(process.env.NEWS_API, {
      timeout: 30000,
      headers: {
        "User-Agent": "NewsApp/1.0",
      },
    });
    const posts = response.data.articles;

    if (!posts || posts.length === 0) {
      const message = "No posts found from API";
      console.log("⚠️", message);
      if (res) return res.status(200).json(message);
      return { success: false, message };
    }

    console.log(`📰 Found ${posts.length} posts to process`);
    const savedPosts: Post[] = [];
    let processedCount = 0;

    // Step 3: Process and save new posts
    for (const post of posts) {
      processedCount++;
      console.log(
        `📝 Processing post ${processedCount}/${posts.length}: ${post.title?.substring(0, 50)}...`
      );

      // Check if content needs to be scraped
      let fullContent = post.content || "";
      const needsScraping =
        post.url &&
        (!fullContent ||
          fullContent.includes("[+") ||
          fullContent.includes("... [") ||
          fullContent.includes("...") ||
          fullContent.length < 1000);

      if (needsScraping) {
        try {
          console.log(`🔍 Scraping full content for: ${post.url}`);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          fullContent = await scrapeFullContent(post.url);
        } catch (scrapeError: any) {
          console.error(
            `❌ Failed to scrape content for ${post.url}:`,
            scrapeError.message
          );
          fullContent = fullContent || "Content unavailable";
        }
      }

      // Skip post if content is an error message
      if (fullContent.startsWith("Error fetching full content:") || 
          fullContent === "Could not extract full content from the URL") {
        console.log(`⚠️ Skipping post due to fetch error: ${post.title?.substring(0, 50)}...`);
        continue;
      }

      // Ensure description exists
      let description = post.description;
      if (!description || description.trim() === "") {
        description = extractDescription(fullContent);
      }

      const newPost: Post = {
        title: post.title || "Untitled Article",
        description: description,
        content: fullContent || "No content available",
        url: post.url,
        url_to_image: post.urlToImage,
        published_at: post.publishedAt || new Date().toISOString(),
        author: post.author || "Unknown Author",
        source: post.source || { id: null, name: "Unknown Source" },
      };

      try {
        const { data, error } = await supabase
          .from("posts")
          .insert([newPost])
          .select();

        if (error) {
          console.error(`❌ Error saving post "${post.title}":`, error.message);
        } else if (data) {
          savedPosts.push(data[0]);
          console.log(`✅ Saved: ${post.title?.substring(0, 50)}...`);
        }
      } catch (saveError: any) {
        console.error(
          `❌ Error saving post "${post.title}":`,
          saveError.message
        );
      }
    }

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    const successMessage = `Successfully processed ${savedPosts.length} articles in ${duration}ms`;
    console.log(`🎉 ${successMessage}`);

    const result = {
      success: true,
      message: successMessage,
      count: savedPosts.length,
      posts: savedPosts,
      executionTime: duration,
      timestamp: endTime.toISOString(),
    };

    if (res) {
      return res.status(200).json(result);
    }

    return result;
  } catch (error: any) {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    const errorMessage = `Error in fetchPostsAndSave after ${duration}ms: ${error.message}`;
    console.error("❌", errorMessage);
    console.error("Stack trace:", error.stack);

    if (res) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
        executionTime: duration,
        timestamp: endTime.toISOString(),
      });
    }

    throw error;
  }
};

// Store the cron task reference and execution history
let scheduledTask: any = null;
let lastExecution: any = null;  // ✅ Add proper type
let executionHistory: Array<{
  timestamp: Date;
  success: boolean;
  message: string;
}> = [];

// Add execution to history
const addToHistory = (success: boolean, message: string) => {
  executionHistory.unshift({
    timestamp: new Date(),
    success,
    message,
  });

  if (executionHistory.length > 10) {
    executionHistory = executionHistory.slice(0, 10);
  }
};
export const startPostScheduler = () => {
  console.log("🔧 Initializing post scheduler...");

  // Main cron - 00:00 and 12:00 UTC
  const mainCron = "0 0,12 * * *";
  
  scheduledTask = cron.schedule(
    mainCron,
    async () => {
      console.log(`⏰ Scheduled post fetch triggered`);
      try {
        const result = await fetchPostsAndSave();
        console.log(`✅ Completed - ${result.count} posts processed`);
        addToHistory(true, `Scheduled fetch completed - ${result.count} posts`);
      } catch (error: any) {
        console.error(`❌ Scheduled fetch failed: ${error.message}`);
        addToHistory(false, `Scheduled fetch failed: ${error.message}`);
      }
    },
    { timezone: "UTC" }
  );

  // Keep-alive ping every 10 minutes
  cron.schedule("*/10 * * * *", () => {
    console.log("💓 Keep-alive ping");
  }, { timezone: "UTC" });

  console.log("🚀 Post scheduler started successfully");
};

// Manual trigger endpoint
export const manualPostRefresh = async (req: Request, res: Response) => {
  try {
    console.log(
      `🔄 Manual post refresh triggered at ${new Date().toISOString()}`
    );
    const result = await fetchPostsAndSave(req, res);
    addToHistory(
      true,
      `Manual refresh completed - ${result.count} posts processed`
    );
  } catch (error: any) {
    console.error("❌ Manual post refresh failed:", error.message);
    addToHistory(false, `Manual refresh failed: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Manual refresh failed",
      error: error.message,
    });
  }
};

export const getNews = async (req: Request, res: Response) => {
  const search = req.query.search as string
  let query = supabase.from('posts').select('*');
  
  if (search && search.trim() !== "") {
    const keyword = `%${search}%`;
    query = query.or(`title.ilike.${keyword},content.ilike.${keyword}`);
  }

  const { data, error } = await query;
  if (error) res.status(400).json({ error: error.message })
  else res.status(200).json({ posts: data })
}

export const getNewsDetail = async (req: Request, res: Response) => {
  const { id } = req.params
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (data) {
    res.status(200).json(data)
  }
  if (error) {
    res.status(404).json({ error: error.message })
  }
}
export const getSchedulerStatus = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const currentHour = now.getUTCHours();
    
    let nextExecution: string;
    if (currentHour < 12) {
      nextExecution = `Today at 12:00 UTC`;
    } else {
      nextExecution = `Tomorrow at 00:00 UTC`;
    }
    
    res.status(200).json({
      status: 'running',
      scheduler: {
        isActive: scheduledTask !== null,
        pattern: '0 0,12 * * *',
        timezone: 'UTC',
        description: 'Runs every day at 00:00 and 12:00 UTC',
        nextExecution: nextExecution
      },
      execution: {
        lastRun: lastExecution ? lastExecution.toISOString() : 'Never',  // ✅ Now works
        history: executionHistory.slice(0, 5)
      },
      server: {
        currentTime: now.toISOString(),
        uptime: `${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m`,
        uptimeSeconds: Math.floor(process.uptime())
      }
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};