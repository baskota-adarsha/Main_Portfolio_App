export function BlogSkeleton() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-16xl">
        {/* Section Header Skeleton */}
        <div className="mb-12 md:mb-16 flex items-center gap-4">
          <div className="w-32 h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
        </div>

        {/* Blog Posts Skeleton */}
        <div className="space-y-12 md:space-y-16">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Image Skeleton */}
                <div className="flex-shrink-0 w-full md:w-80">
                  <div className="w-full h-48 md:h-56 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>

                {/* Content Skeleton */}
                <div className="flex-1 flex flex-col justify-start">
                  <div className="w-3/4 h-8 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-2 mb-6">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
