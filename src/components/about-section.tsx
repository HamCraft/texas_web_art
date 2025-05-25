"use client"

import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [inView, controls])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container" ref={ref}>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            className="relative  overflow-hidden rounded-lg"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
          >
            <Image
              src="/about-grok.jpg"
              alt="Texas Web Art Team"
              height={550}
              width={550}
              priority
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeUp}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
            <div className="space-y-4 text-slate-200">
              <p>
                Texas Web Art is a startup built on a shared passion for creativity, design, and digital innovation. We specialize in crafting custom websites that combine style with performance.
              </p>
              <p>
                Founded in 2025, we’re just getting started—bringing fresh ideas and a strong commitment to quality, branding, and user-centered design to every project we take on.

              </p>
              <p>
                Our mission is to help businesses of all sizes stand out online through beautiful, functional websites that reflect their unique identity and goals.

              </p>
              <p>
               
As we grow, we’re focused on building strong, lasting relationships with our future clients by delivering creative solutions and dependable support every step of the way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}