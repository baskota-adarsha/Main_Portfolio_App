import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-100 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            404
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-lg text-gray-600">
            Oops! It seems you've wandered into the digital void. The page you're looking for doesn't exist here.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link href="/">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg px-8 py-6 text-base transition-all hover:shadow-lg inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Fun message */}
        <p className="text-sm text-gray-500 pt-4">
          While you're here, why not check out my latest{" "}
          <Link href="/blog" className="text-teal-600 hover:underline">
            blog posts
          </Link>{" "}
          or{" "}
          <Link href="/work" className="text-teal-600 hover:underline">
            projects
          </Link>
          ?
        </p>
      </div>
    </main>
  )
}
