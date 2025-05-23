"use client"

import { Palette, Award, Lightbulb, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function ServicesSection() {
  const services = [
    {
      icon: <Palette className="h-12 w-12 text-red-600" />,
      title: "Branding",
      description:
        "We create unique brand identities that resonate with your audience and set you apart from competitors.",
    },
    {
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: "Quality",
      description:
        "Our commitment to excellence ensures that every project we deliver meets the highest standards of quality.",
    },
    {
      icon: <Layers className="h-12 w-12 text-red-600" />,
      title: "Design",
      description:
        "We craft beautiful, intuitive designs that enhance user experience and drive engagement with your website.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-red-600" />,
      title: "Creativity",
      description:
        "Our innovative approach brings fresh ideas to every project, helping your business stand out in a crowded market.",
    },
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden") // Reset when out of view
    }
  }, [inView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="services" className="bg-muted py-28 text-white">
      <div className="container" ref={ref}>
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-slate-200">
            We offer comprehensive web development solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <Card className="border-2 border-blue-900 h-[250px]  text-white transition-all hover:border-red-500 t">
                <CardHeader className="flex items-center justify-center pt-6">{service.icon}</CardHeader>
                <CardContent className="text-center -mt-2">
                  <CardTitle className="mb-2 mt-4 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-blue-200 ">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
