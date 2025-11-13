
import { BlogSkeleton } from "@/components/blog-skeleton"
import WorkSection from "@/components/work-section"
import { Suspense } from "react"


export default function BlogPage() {
  return (

     <Suspense fallback={<BlogSkeleton></BlogSkeleton>}><WorkSection /></Suspense> 
  
  )
}
