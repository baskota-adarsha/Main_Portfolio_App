
import BlogSection from "@/components/blog-section"
import { BlogSkeleton } from "@/components/blog-skeleton"
import { Suspense } from "react"
export default function BlogPage() {
  return (

 <Suspense fallback={<BlogSkeleton/>}> <BlogSection /></Suspense>
     


  )
}
