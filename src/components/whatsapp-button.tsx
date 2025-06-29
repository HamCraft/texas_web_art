"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + or spaces)
    const phoneNumber = "+923092013289" // Example: US number
    const message = "Hi! I'm interested in your web development services."

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="h-6 w-6 relative z-10" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>
    </motion.div>
  )
}
