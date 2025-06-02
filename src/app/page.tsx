// app/page.tsx
import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import WorksSection from '@/components/works-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Texas Web Art - Creative Web Design & Development',
  description: 'Texas Web Art offers professional web design, development, and digital solutions in Texas. Contact us for innovative and customized websites.',
  keywords: ['Texas web design', 'web development Texas', 'custom websites Texas', 'Texas Web Art'],
  openGraph: {
    title: 'Texas Web Art',
    description: 'Creative web design and development services in Texas.',
    url: 'https://texaswebart.com',
    siteName: 'Texas Web Art',
    images: [
      {
        url: 'https://texaswebart.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Texas Web Art',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Web Art',
    description: 'Creative web design and development services in Texas.',
    images: ['https://texaswebart.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://texaswebart.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}