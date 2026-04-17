"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage: string
  stats?: Array<{
    value: string
    label: string
  }>
  floatingImage?: string
  showLogo?: boolean
}

export function HeroSection({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCta,
  backgroundImage,
  stats,
  floatingImage,
  showLogo = false,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 194, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 194, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-40 h-40 border border-[#00C2FF]/20 rounded-full hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-20 h-20 border border-[#00C2FF]/30 rotate-45 hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Logo */}
      {showLogo && (
        <motion.div
          className="absolute top-1/3 right-[15%] hidden xl:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.15, 0.25, 0.15], 
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            opacity: { duration: 4, repeat: Infinity }
          }}
        >
          <Image
            src="/logo.png"
            alt=""
            width={180}
            height={180}
            className="w-44 h-44 opacity-30 drop-shadow-[0_0_30px_rgba(0,194,255,0.5)]"
          />
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
                <span className="text-[#00C2FF] text-sm font-medium">{eyebrow}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              {title}{" "}
              {titleHighlight && (
                <span className="bg-gradient-to-r from-[#00C2FF] to-[#0A8FD4] bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
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
                  className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                >
                  {secondaryCta.text}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-sm text-white/50"
            >
              Sin costo · Respuesta en menos de 2 horas
            </motion.p>

            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {floatingImage && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={floatingImage}
                  alt="Feature image"
                  width={600}
                  height={450}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#00C2FF]/20 rounded-2xl" />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00C2FF]/20 to-transparent blur-2xl -z-10 rounded-2xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
