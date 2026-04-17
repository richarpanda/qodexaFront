"use client"

import { motion } from "framer-motion"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardPremiumProps {
  number: string
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
  href: string
  delay?: number
}

export function ServiceCardPremium({
  number,
  title,
  description,
  icon: Icon,
  tags,
  href,
  delay = 0,
}: ServiceCardPremiumProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link href={href} className="block">
        <div className="relative bg-card p-8 rounded-3xl border border-border overflow-hidden transition-all duration-500 hover:border-[#00C2FF]/30 hover:shadow-[0_25px_60px_rgba(0,194,255,0.15)]">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          {/* Number */}
          <span className="absolute top-6 right-6 text-5xl font-black text-muted/20 group-hover:text-[#00C2FF]/20 transition-colors">
            {number}
          </span>

          {/* Icon with particles */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/20 to-[#00E5A0]/20 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#00C2FF]" />
            </div>
            {/* Icon particles on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#00C2FF]/60 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, (Math.random() - 0.5) * 40],
                    y: [0, -30 - Math.random() * 20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#00C2FF] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full group-hover:bg-[#00C2FF]/10 group-hover:text-[#00C2FF] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex items-center text-[#00C2FF] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm">Ver mas</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
          </div>

          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
        </div>
      </Link>
    </motion.div>
  )
}

interface ServiceCardSecondaryProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
}

export function ServiceCardSecondary({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardSecondaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative bg-card p-6 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-[#00C2FF]/20 hover:shadow-md">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-xl group-hover:bg-[#00C2FF]/10 transition-colors">
            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-[#00C2FF] transition-colors" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1 group-hover:text-[#00C2FF] transition-colors">
              {title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
