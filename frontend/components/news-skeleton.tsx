export default function NewsSkeleton() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        {/* Title skeleton */}
        <div className="h-10 md:h-12 bg-gray-200 rounded-lg mb-8 w-48 animate-pulse"></div>

        {/* Search bar skeleton */}
        <div className="h-12 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>

        {/* Category filters skeleton */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-10 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Stats skeleton */}
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* News cards skeleton */}
      <div className="space-y-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
            {/* Image skeleton */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-full h-48 md:h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            {/* Content skeleton */}
            <div className="md:w-2/3 space-y-3">
              {/* Source and time skeleton */}
              <div className="flex gap-3 mb-3">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Title skeleton */}
              <div className="space-y-2 mb-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>

              {/* Excerpt skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              </div>

              {/* Read More skeleton */}
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
