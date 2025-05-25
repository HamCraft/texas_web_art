"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-white bg-muted py-12">
      <div className="container">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }} // 👈 re-trigger on scroll back
        >
          <div>
            <h3 className="mb-4 text-lg font-bold">Texas Web Art</h3>
            <p className="text-sm text-slate-200">
              Creating beautiful, functional websites for businesses all over the world.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link href="#services" className="text-slate-200 hover:text-red-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-200 hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#works" className="text-slate-200 hover:text-red-500">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-200 hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-slate-200 hover:text-red-500">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-red-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-red-500">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-red-500">
                  Branding
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" className="text-slate-200 hover:text-red-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" target="_blank" className="text-slate-200 hover:text-red-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" target="_blank" className="text-slate-200 hover:text-red-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" target="_blank" className="text-slate-200 hover:text-red-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/HamCraft" target="_blank" className="text-slate-200 hover:text-red-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 border-t pt-6 text-center text-sm text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }} // 👈 also animate the bottom line
        >
          <p>&copy; {new Date().getFullYear()} Texas Web Art. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
