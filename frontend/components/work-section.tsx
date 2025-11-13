import Link from "next/link"
interface WorkPost{

id:number,
title:string,
excerpt:string,
image?:string

}
interface WorkPostsResponse{


  posts:WorkPost[]
}
export default async function WorkSection() {

  const res =await fetch ('http://localhost:5000/works',{

    next:{revalidate:1}
  })

    if(!res.ok){
 throw new Error(`Failed to fetch work posts: ${res.status} ${res.statusText}`)
}


  const works:WorkPostsResponse=await res.json()
  

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
           Works
          </h1>

        </div>

        {/* Blog Posts */}
        <div className="space-y-12 md:space-y-16">
          {works.posts.map((post:WorkPost) => (
            <article key={post.id} className="group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Image */}
                    <div className="flex-shrink-0 w-full md:w-80 animate-shimmer rounded-lg overflow-hidden">
  <img
    src={post.image || "/placeholder.svg"}
    alt={post.title}
    loading="lazy"
    className="w-full h-48 md:h-56 object-cover"
  />
</div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-start">
                  <Link href={`/work/${post.id}`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </Link>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href={`/work/${post.id}`}
                    className="inline-flex text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
