
import BlogDetail from "@/components/blog-detail"
import BlogDetailSkeleton from "@/components/blog-detail-skeleton";
import { Suspense } from "react";
export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const {id}=await params;
    
  return (

    <Suspense fallback={<BlogDetailSkeleton/>}>      <BlogDetail postId={id} /></Suspense>


  
  )
}
