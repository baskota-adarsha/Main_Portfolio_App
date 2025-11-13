

import Link from "next/link"
import { ArrowLeft,ExternalLink} from "lucide-react"

interface WorkPost {
  id: number
  title: string
  excerpt: string
  image: string

  content: string
  project_link:string

}
interface WorkPostResponse {
  post:WorkPost
}

export default async function BlogDetail({ postId }: { postId: string }) {
let post: WorkPost| null = null
  
  try {
    const res = await fetch(`https://main-portfolio-app-backend.onrender.com/works/${postId}`, {
      next: { revalidate: 1 }
    })


    // Check if response is OK
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data:WorkPostResponse = await res.json()

    post = data.post // This matches your API response structure

  } catch (error:any) {
    throw new Error(error.message || "Failed to load blog work posts")

  }
    
  


  if (!post) {
    throw new Error("Work post not found or empty response")
  }


  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-40xl">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Work
        </Link>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
  {post.title}
</h1>
        {/* Featured Image */}
        <div className="mb-12 md:mb-18">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg"
          />
        </div>
        {/* ✅ View Project Link */}
        {post.project_link && (
          <div className="mb-12 ">
            <a
              href={post.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300"
            >
              View Project
              <ExternalLink size={18} />
            </a>
          </div>
        )}
   
       
        {/* Post Content */}
        <article className="prose prose-lg max-w-none mb-12 md:mb-16">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </article>

    
   
      </div>
    </section>
  )
}
