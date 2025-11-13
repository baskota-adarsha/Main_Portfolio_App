"use client"

import { useState, useEffect, useTransition } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import NewsSkeleton from "@/components/news-skeleton"
import { NewsPost } from "@/app/news/page"

export default function NewsSection({
  news,
  initialSearch
}: {
  news: NewsPost[]
  initialSearch: string
}) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [isPending, startTransition] = useTransition()
  const [loadedImages, setLoadedImages] = useState<Set<string | number>>(new Set())

  useEffect(() => {
    const path = searchQuery ? `/news?search=${encodeURIComponent(searchQuery)}` : `/news`
    if (searchQuery === initialSearch) return 
    const timeout = setTimeout(() => {
      startTransition(() => {
        router.push(path)
      })
    }, 600)
    return () => clearTimeout(timeout)
  }, [searchQuery, router, initialSearch])

  // Check if images are already cached on mount
  useEffect(() => {
    news?.forEach((article) => {
      const img = new Image()
      img.src = article.url_to_image || "/no-image.png"
      if (img.complete) {
        setLoadedImages(prev => new Set(prev).add(article.id))
      }
    })
  }, [news])

  const handleImageLoad = (id: string | number) => {
    setLoadedImages(prev => new Set(prev).add(id))
  }

  if (isPending) {
    return <NewsSkeleton />
  }

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8">
          News Hub
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-gray-900"
          />
        </div>

        {/* Stats */}
        <div className="mt-8 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            {news?.length || 0} articles
          </span>
        </div>
      </div>

      {/* News Cards */}
      {news?.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No articles found</p>
      ) : (
        <div className="space-y-8">
          {news?.map((article: NewsPost) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <article className="group cursor-pointer">
                <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 hover:border-teal-600 transition-colors">
                  {/* Image with shimmer loading */}
                  <div className="md:w-1/3 flex-shrink-0 relative overflow-hidden rounded-lg">
                    {!loadedImages.has(article.id) && (
                      <div className="absolute inset-0 animate-shimmer" />
                    )}
                    <img
                      src={article.url_to_image || "/no-image.png"}
                      alt={article.title}
                      onLoad={() => handleImageLoad(article.id)}
                      className={`w-full h-48 md:h-40 object-cover group-hover:shadow-lg transition-all duration-300 ${
                        loadedImages.has(article.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-teal-600 font-semibold text-sm">
                          {article.source?.name || 'Unknown'}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-2">{article.description}</p>
                    </div>
                    <div className="mt-4">
                      <span className="text-teal-600 font-semibold text-sm hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}