export default function ContactSkeleton() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-0">
        {/* Heading skeleton */}
        <div className="mb-12">
          <div className="h-12 md:h-16 bg-gray-200 rounded-lg mb-4 animate-pulse w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full mb-2"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-2/3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form skeleton */}
          <div>
            <div className="h-8 bg-gray-200 rounded-lg mb-6 animate-pulse w-1/2"></div>
            <div className="space-y-4">
              {/* Form fields */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                </div>
              ))}
              {/* Button */}
              <div className="h-12 bg-gray-300 rounded-lg animate-pulse w-full mt-6"></div>
            </div>
          </div>

          {/* Contact Information skeleton */}
          <div>
            <div className="h-8 bg-gray-200 rounded-lg mb-6 animate-pulse w-1/2"></div>
            <div className="space-y-8">
              {/* Email section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
              {/* Social links */}
              <div>
                <div className="h-5 bg-gray-200 rounded mb-4 animate-pulse w-1/3"></div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                  </div>
                ))}
              </div>
              {/* Availability box */}
              <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
