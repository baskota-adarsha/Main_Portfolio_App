export default function AboutSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-pulse">
          {/* Heading Skeleton */}
          <div className="h-10 sm:h-12 md:h-14 w-32 bg-gray-200 rounded"></div>

          {/* Description Skeleton */}
          <div className="space-y-3">
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-4/5"></div>
          </div>

          {/* Technologies List Skeleton */}
          <ul className="space-y-2">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="flex gap-3">
                <span className="h-4 w-4 bg-gray-200 rounded flex-shrink-0"></span>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
