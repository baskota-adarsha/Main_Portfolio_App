"use client"

import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to error reporting service
    console.error("[v0] Error caught:", error)
  }, [error])

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Something Went Wrong</h2>
          <p className="text-lg text-gray-600">
           {error.message||`We encountered an unexpected error. Our team has been notified and we're working on fixing it.`} 
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 font-mono bg-gray-100 p-3 rounded break-all">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg px-8 py-6 text-base transition-all hover:shadow-lg"
          >
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold rounded-lg px-8 py-6 text-base transition-all w-full bg-transparent"
            >
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Helpful links */}
        <p className="text-sm text-gray-500 pt-4">
          Explore our{" "}
          <Link href="/" className="text-teal-600 hover:underline">
           Home
          </Link>{" "}
          or{" "}
          <Link href="/about" className="text-teal-600 hover:underline">
            About
          </Link>{" "}
          while we fix this issue.
        </p>
      </div>
    </main>
  )
}
