
import BlogDetailSkeleton from "@/components/blog-detail-skeleton";
import NewsDetail from "@/components/news-detail"
import { Suspense } from "react";

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
     const {id}=await params;
  return (

  <Suspense fallback={<BlogDetailSkeleton/>}>   <NewsDetail id={id} /> </Suspense>
   
     

  )
}


