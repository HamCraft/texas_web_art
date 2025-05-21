"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  // Reference to the section element
  const sectionRef = useRef(null)

  // Check if section is in view
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Animation controls for different elements
  const titleControls = useAnimation()
  const textControls = useAnimation()
  const buttonControls = useAnimation()
  const imageControls = useAnimation()

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      // Start animations in sequence
      titleControls.start("visible")
      textControls.start("visible")
      buttonControls.start("visible")
      imageControls.start("visible")
    } else {
      // Reset animations when out of view
      titleControls.start("hidden")
      textControls.start("hidden")
      buttonControls.start("hidden")
      imageControls.start("hidden")
    }
  }, [isInView, titleControls, textControls, buttonControls, imageControls])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-muted py-12 md:py-20">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left side - Text content with animations */}
          <div className="flex flex-col space-y-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              initial="hidden"
              animate={titleControls}
            >
              <motion.span
                className="text-primary"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
                }}
                initial="hidden"
                animate={titleControls}
              >
                Texas
              </motion.span>{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } },
                }}
                initial="hidden"
                animate={titleControls}
              >
                Web Art
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } },
              }}
              initial="hidden"
              animate={textControls}
            >
              We create stunning, functional websites that help your business grow. Our team of experts is ready to
              bring your vision to life.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } },
              }}
              initial="hidden"
              animate={buttonControls}
            >
              <Button asChild size="lg">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#works">View Our Work</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Image with animated border */}
          <motion.div
            className="relative mx-auto w-full md:ml-auto"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.7 } },
            }}
            initial="hidden"
            animate={imageControls}
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* Animated border effect - this animation runs continuously regardless of scroll */}
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-red-500 to-blue-600 opacity-75"
                animate={{
                  background: [
                    "linear-gradient(90deg, var(--primary) 0%, #ef4444 50%, #2563eb 100%)",
                    "linear-gradient(180deg, #2563eb 0%, var(--primary) 50%, #ef4444 100%)",
                    "linear-gradient(270deg, #ef4444 0%, #2563eb 50%, var(--primary) 100%)",
                    "linear-gradient(360deg, var(--primary) 0%, #ef4444 50%, #2563eb 100%)",
                    "linear-gradient(90deg, var(--primary) 0%, #ef4444 50%, #2563eb 100%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />

              {/* Actual image with a slight padding to show the animated border */}
              <motion.div
                className="relative m-1 overflow-hidden rounded-lg bg-background"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/about2.png"
                  alt="Texas Web Art Hero"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.15),transparent_40%)]"></div>
    </section>
  )
}
