

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  
  content: string

}
interface BlogPostResponse {
  post:BlogPost
}

export default async function BlogDetail({ postId }: { postId: string }) {
 let post: BlogPost | null = null
  
  try {
    const res = await fetch(`https://main-portfolio-app-backend.onrender.com/blog-posts/${postId}`, {
      next: { revalidate: 300 }
    })



 if (!res.ok) {
      throw new Error(`Failed to fetch blog post – ${res.status} ${res.statusText}`)
    }
    const data:BlogPostResponse = await res.json()

    post = data.post // This matches your API response structure

  } catch (error:any) {
    throw new Error(error.message || "Failed to load blog post")
    // post remains null, will show error UI
  }



  if (!post) {
    throw new Error("Blog post not found or empty response")
  }

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-40xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
  {post.title}
</h1>
        {/* Featured Image */}
        <div className="mb-8 md:mb-12">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Post Metadata */}
       
        {/* Post Content */}
        <article className="prose prose-lg max-w-none mb-12 md:mb-16">
          {post.content.split("\n\n").map((paragraph:any, index:any) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </article>


      </div>
    </section>
  )
}
