import NewsSection from "@/components/news-section"

export interface NewsPost{

id:string,
title:string,
description:string,
content:string,
url_to_image:string,
published_at:string,
author:string,
source:{
  id:string,
  name:string
},
created_at:string,
updated_at:string


}

 export interface NewsPostResponse{

  posts:NewsPost[]
}
export default async function NewsPage({ 
  searchParams 
}: { 
  searchParams: { search?: string } 
}) {
  const search = (await searchParams).search || ''
  
  const res = await fetch(`http://localhost:5000/news?search=${search}`, {
    next: { revalidate: 60 },
   
  })

    if(!res.ok){
 throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`)
}

  const data:NewsPostResponse = await res.json()

  return <NewsSection news={data.posts} initialSearch={search} />
}