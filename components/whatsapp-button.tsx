"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20saber%20más%20sobre%20Qodexa"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20BA5A] transition-all group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, y: -4 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        ¡Escríbenos!
        <span className="absolute top-full right-4 border-8 border-transparent border-t-gray-900" />
      </span>
    </motion.a>
  )
}
