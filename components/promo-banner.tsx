"use client"

import { motion } from "framer-motion"
import { X, Zap, Clock, Gift } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

interface PromoBannerProps {
  text: string
  highlight?: string
  ctaText: string
  ctaHref: string
  endDate?: Date
  variant?: "urgency" | "gift" | "limited"
}

export function PromoBanner({ 
  text, 
  highlight, 
  ctaText, 
  ctaHref,
  endDate,
  variant = "urgency"
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (!endDate) return

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  if (!isVisible) return null

  const icons = {
    urgency: Zap,
    gift: Gift,
    limited: Clock,
  }

  const Icon = icons[variant]

  const gradients = {
    urgency: "from-orange-500 via-red-500 to-pink-500",
    gift: "from-emerald-500 via-teal-500 to-cyan-500",
    limited: "from-blue-500 via-indigo-500 to-purple-500",
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r ${gradients[variant]} text-white py-3 px-4`}
    >
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap text-sm md:text-base">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
        
        <span className="text-center">
          {text}{" "}
          {highlight && (
            <span className="font-bold underline decoration-2 underline-offset-2">
              {highlight}
            </span>
          )}
        </span>

        {endDate && (
          <div className="flex items-center gap-1 font-mono font-bold bg-white/20 rounded px-2 py-1">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
        )}

        <Link
          href={ctaHref}
          className="bg-white text-gray-900 font-semibold px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {ctaText}
        </Link>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded p-1 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
