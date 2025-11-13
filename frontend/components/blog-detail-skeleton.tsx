export default function BlogDetailSkeleton() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-16xl">
        {/* Back Button Skeleton */}
        <div className="mb-8 h-6 w-32 bg-gray-200 rounded animate-pulse" />

        {/* Metadata Skeleton */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="mb-4 space-y-2">
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="mb-8 md:mb-12 h-96 md:h-[500px] bg-gray-200 rounded-lg animate-pulse" />

        {/* Content Skeleton */}
        <article className="mb-12 md:mb-16 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </article>

        {/* Related Posts Skeleton */}
        <div className="border-t border-gray-200 pt-12">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-8" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-4 border border-gray-200 rounded-lg">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
