"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
  variant?: "light" | "dark" | "gradient"
}

export function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCta,
  backgroundImage,
  variant = "gradient",
}: CTASectionProps) {
  const bgClasses = {
    light: "bg-secondary",
    dark: "bg-[#0A1628]",
    gradient: "bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00C2FF]/20",
  }

  return (
    <section className={`relative py-24 overflow-hidden ${bgClasses[variant]}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="CTA background"
            fill
            className="object-cover opacity-20"
          />
        </div>
      )}

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00C2FF]/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance ${
            variant === "light" ? "text-foreground" : "text-white"
          }`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            variant === "light" ? "text-muted-foreground" : "text-white/70"
          }`}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#00C2FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00A8E0] transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,194,255,0.3)]"
          >
            {ctaText}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center gap-2 font-medium transition-colors border-2 border-[#00C2FF] px-6 py-3.5 rounded-xl ${
                variant === "light"
                  ? "text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white"
                  : "text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white"
              }`}
            >
              {secondaryCta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
