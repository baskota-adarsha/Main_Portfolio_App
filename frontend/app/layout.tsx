import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ToasterClient from "@/components/toaster-client";


const roboto = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Roboto font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen bg-white">
        <ToasterClient /> {/* ✅ safe client-only usage */}
        <Header />
        <main>
          
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
