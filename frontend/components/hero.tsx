import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-gray-600 text-lg sm:text-xl font-medium">Hi, There! I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Adarsha Baskota
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
           Full-stack developer and CS student focused on creating beautiful, performant web applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href={'/about'}> <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg px-8 py-6 text-base transition-all hover:shadow-lg"
            >
              About Me
            </Button></Link>
           <a
  href="/Adarsha_Baskota_Resume.pdf" // place your PDF file inside /public folder
  target="_blank"
  rel="noopener noreferrer"
>    <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold rounded-lg px-8 py-6 text-base transition-all bg-transparent"
            >
              Download Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button></a>
        
          </div>
        </div>
      </div>
    </section>
  )
}
