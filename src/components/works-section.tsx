"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WorksSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website with integrated payment processing.",
      image: "/work1.png",
      github: "https://github.com/HamCraft/ecommerce-sanity",
      live: "https://ecommerce-sanity-cyan.vercel.app/",
    },
    {
      title: "Temu Clone Website",
      description: "A Temu clone that replicates the user interface and core shopping experience using modern web technologies.",
      image: "/work2.png",
      github: "https://github.com/Jamila654/temu_clone_website",
      live: "https://temu-clone-website.vercel.app/",
    },
    {
      title: "Portfolio Site",
      description: "Minimalist portfolio website for a software engineer.",
      image: "/work3.png",
      github: "https://github.com/HamCraft/portfolio",
      live: "https://ahmedyaqoobdhedhiportfolio.vercel.app/",
    },
  ]

  return (
    <section id="works" className="bg-muted py-20">
      <div className="container ">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }} // 👈 animation triggers every time it's visible
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Work</h2>
          <p className="mx-auto max-w-2xl text-slate-200">
            Check out some of our recent web development projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // 👈 animate again when it comes back into view
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
