"use client"
import { useEffect, useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { sendContactEmail, type ActionResult } from "@/app/actions/send-email"

export default function ContactSection() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<ActionResult | null>(null)

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendContactEmail(null, formData)
      setState(result)
    })
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
        <motion.div className="mb-12 text-center" initial="hidden" animate={controls} variants={fadeUp}>
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Contact Texas Web Art</h2>
          <p className="mx-auto max-w-2xl text-slate-200">Ready to start your project? Get in touch with us today.</p>
        </motion.div>

        <motion.div className="mx-auto max-w-4xl" initial="hidden" animate={controls} variants={fadeUp}>
          <div className="grid gap-8 md:grid-cols-3 ">
            <Card className="border-2 border-blue-900 h-[200px]  text-white transition-all hover:border-red-500">
              <CardHeader className="flex items-center justify-center pt-6">
                <Phone className="h-10 w-10 text-red-600" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Phone</CardTitle>
                <CardDescription>(972) 885-8655</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-900 h-[200px]  text-white transition-all hover:border-red-500">
              <CardHeader className="flex items-center justify-center pt-6">
                <Mail className="h-10 w-10 text-red-600" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Email</CardTitle>
                <CardDescription>dhedhiahmedyaqoob@gmail.com</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-900 h-[200px]  text-white transition-all hover:border-red-500">
              <CardHeader className="flex items-center justify-center pt-6">
                <MapPin className="h-10 w-10 text-red-600" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-2 mt-4">Location</CardTitle>
                <CardDescription>Dallas, Texas</CardDescription>
              </CardContent>
            </Card>
          </div>

          <motion.div className="mt-8" initial="hidden" animate={controls} variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required disabled={isPending} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        disabled={isPending}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="Your phone number" disabled={isPending} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your web design project"
                      rows={5}
                      required
                      disabled={isPending}
                    />
                  </div>

                  {/* Status message */}
                  {state && (
                    <div
                      className={`flex items-center gap-2 rounded-md p-3 font-semibold ${
                        state.success
                          ? "bg-white text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {state.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                      <span className="text-sm">{state.message}</span>
                    </div>
                  )}

                  <Button type="submit" className="w-full contact-ka-button bg-blue-900 hover:bg-red-500 transition-colors duration-800 hover:font-extrabold" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
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
