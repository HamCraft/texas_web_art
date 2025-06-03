// import Header from "@/components/header"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WorksSection from "@/components/works-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Script from "next/script"

// ✅ SEO Metadata (Next.js 14 App Router style)
export const metadata = {
  title: "TexasWebArt | Expert Web Development & Design Services",
  description:
    "TexasWebArt offers modern, responsive, and SEO-optimized web development services for businesses of all sizes. Build your brand with our expert team.",
  keywords: [
    "TexasWebArt",
    "Web Development",
    "Web Design",
    "Next.js 14",
    "SEO Services",
    "Frontend Developer",
    "Full Stack Development",
  ],
  openGraph: {
    title: "TexasWebArt | Web Development Experts",
    description:
      "Professional web design and development powered by Next.js and modern tools. Partner with TexasWebArt to grow your online presence.",
    url: "https://texaswebart.com",
    siteName: "TexasWebArt",
    images: [
      {
        url: "https://texaswebart.com/herosec.png", 
        width: 1200,
        height: 630,
        alt: "TexasWebArt preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://texaswebart.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 🔹 JSON-LD Structured Data for Google */}
      <Script
        type="application/ld+json"
        id="structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TexasWebArt",
            url: "https://texaswebart.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://texaswebart.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
