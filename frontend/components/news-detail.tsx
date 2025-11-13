import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NewsPost } from "@/app/news/page"

export default async function NewsDetail({ id }: { id: string }) {
  let article:NewsPost | null = null
  
  try {
    const res = await fetch(`https://main-portfolio-app-backend.onrender.com/news/${id}`, {
      next: { revalidate: 1 }
    })

     if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    article = data

  } catch (error) {
    console.error('Error fetching news article:', error)
  }


  if (!article) {
    throw new Error("News not found or empty response")
  }


  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
      <div className="max-w-25xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 md:mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to News
        </Link>

        {/* Featured Image */}
        <div className="w-full mb-6 md:mb-8 overflow-hidden rounded-lg">
          <img
            src={article.url_to_image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 text-xs sm:text-sm text-gray-600">
            <span className="text-teal-600 font-semibold">{article.source.name}</span>
            <span className="hidden sm:inline">•</span>
<span>
  {new Date(article.published_at).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</span>
          
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Article Content */}
{/* Article Content */}
<div className="space-y-6 max-w-none">
  {article.content
    .split("\n")
    .filter((p: string) => p.trim()) 
    .map((paragraph: string, index: number) => (
      <p
        key={index}
        className="text-base md:text-lg text-gray-700 leading-relaxed"
      >
        {paragraph}
      </p>
    ))}
</div>

        {/* Optional: Author/Source info footer */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-900">Source: {article.source.name}</p>
              {article.author && <p>By {article.author}</p>}
            </div>
            <Link 
              href="/news" 
              className="text-teal-600 hover:text-teal-700 font-medium text-sm hover:underline transition-colors"
            >
              View more articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}