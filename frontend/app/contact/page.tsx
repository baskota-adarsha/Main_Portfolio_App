
import ContactSection from "@/components/contact-section"
import { Suspense } from "react"
import ContactSkeleton from "@/components/contact-skeleton"
export default function ContactPage() {
  return (
  
  <Suspense fallback={<ContactSkeleton/>}>   <ContactSection /></Suspense>
   
  
   
  )
}
