"use client";

import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Texas Web Art",
    url: "https://texaswebart.com",
    logo: "https://texaswebart.com/logo.png",
    description: "Texas Web Art is a passionate startup delivering web design and development services in Dallas, Texas, since 2025.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75201",
      addressCountry: "US",
    },
    telephone: "+19728858655",
    email: "contact@texaswebart.com",
  };

  return (
    <>
      <NextSeo
        title="About Texas Web Art - Web Design & Development in Dallas"
        description="Learn about Texas Web Art, a passionate startup delivering creative web design and development in Dallas, Texas, since 2025."
        canonical="https://texaswebart.com/#about"
        openGraph={{
          url: "https://texaswebart.com/#about",
          title: "About Texas Web Art",
          description: "Learn about Texas Web Art, a passionate startup delivering creative web design and development in Dallas, Texas, since 2025.",
          images: [
            {
              url: "https://texaswebart.com/about-grok.jpg",
              width: 550,
              height: 550,
              alt: "Texas Web Art team",
            },
          ],
          siteName: "Texas Web Art",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Dallas web design, Texas web development, custom websites, Texas Web Art",
          },
        ]}
      />
      <section id="about" className="py-20 bg-muted" aria-labelledby="about-heading">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="container" ref={ref}>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              className="relative overflow-hidden rounded-lg"
              initial="hidden"
              animate={controls}
              variants={fadeUp}
            >
              <Image
                src="/about-grok.jpg"
                alt="Texas Web Art team designing creative websites in Dallas"
                height={550}
                width={550}
                priority={false}
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeUp}
            >
              <h2 id="about-heading" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                About Texas Web Art
              </h2>
              <div className="space-y-4 text-slate-200">
                <p>
                  Texas Web Art is a passionate startup delivering <strong>web design in Dallas, Texas</strong> and innovative digital solutions. We specialize in crafting <strong>custom websites</strong> that blend stunning design with seamless performance.
                </p>
                <p>
                  Founded in 2025 in Dallas, Texas, we bring fresh ideas and a commitment to quality, branding, and <strong>user-centered web design</strong> to every project.
                </p>
                <p>
                  Our mission is to help businesses across Texas stand out online with beautiful, functional websites that reflect their unique identity and goals.
                </p>
                <p>
                  As we grow, we’re dedicated to building lasting relationships with clients by providing creative <strong>web development in Dallas</strong> and dependable support every step of the way. <a href="#contact" className="text-blue-500 hover:underline">Contact us</a> to start your project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}