
import AboutSection from "@/components/about-section"
import AboutSkeleton from "@/components/about-skeleton"
import ExperienceSection from "@/components/experience-section"
import ExperienceSkeleton from "@/components/experience-skeleton"
import { Suspense } from "react"

export default function AboutPage() {
  return (
   
   <>      <Suspense fallback={<AboutSkeleton/>}><AboutSection /></Suspense>
      <Suspense fallback={<ExperienceSkeleton/>}><ExperienceSection /></Suspense></>



  )
}
