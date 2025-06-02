// import Header from "@/components/header"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WorksSection from "@/components/works-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
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
