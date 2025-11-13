export default function ExperienceSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 animate-pulse">
          {/* Heading Skeleton */}
          <div className="h-10 sm:h-12 md:h-14 w-40 bg-gray-200 rounded"></div>

          {/* Intro Text Skeleton */}
          <div className="space-y-3">
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-4/5"></div>
          </div>

          {/* Experience Items Skeleton */}
          <div className="space-y-12">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="space-y-3">
                {/* Company Name */}
                <div className="h-6 sm:h-7 bg-gray-200 rounded w-3/4"></div>

                {/* Position */}
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>

                {/* Duration */}
                <div className="h-4 bg-gray-200 rounded w-2/5"></div>

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
