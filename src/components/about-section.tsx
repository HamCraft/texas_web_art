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
                Texas Web Art is a team of passionate web developers and designers dedicated to creating exceptional
                digital experiences for businesses of all sizes.
              </p>
              <p>
                Founded in 2024, we've helped dozens of clients all over the world establish a strong online
                presence through custom website development, branding, and digital marketing.
              </p>
              <p>
                Our approach combines technical expertise with creative design to deliver websites that not only look
                great but also perform exceptionally well. We believe in building long-term relationships with our
                clients, providing ongoing support and guidance as their businesses grow.
              </p>
              <p>
                Whether you're a small business looking to establish your first online presence or a larger company
                seeking to revamp your digital strategy, we have the skills and experience to help you succeed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}