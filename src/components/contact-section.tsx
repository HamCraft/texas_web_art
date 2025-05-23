"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  // Animation logic
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

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
    <section id="contact" className="bg-muted py-20">
      <div className="container" ref={ref}>
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-slate-200 ">
            Ready to start your project? Get in touch with us today.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex items-center justify-center pt-6">
                <Phone className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Phone</CardTitle>
                <CardDescription>(555) 123-4567</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-center pt-6">
                <Mail className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Email</CardTitle>
                <CardDescription>info@texaswebart.com</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-center pt-6">
                <MapPin className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Location</CardTitle>
                <CardDescription>Austin, Texas</CardDescription>
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="mt-8"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
