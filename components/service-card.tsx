"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  image?: string
  index?: number
}

export function ServiceCard({ icon, title, description, href, image, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:border-[#00C2FF]/30 hover:shadow-[0_20px_50px_rgba(0,194,255,0.1)] overflow-hidden">
          {image && (
            <div className="relative h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
            </div>
          )}

          <div className="flex items-center justify-center w-14 h-14 bg-[#00C2FF]/10 border border-[#00C2FF]/20 text-[#00C2FF] rounded-xl mb-5 transition-all duration-300 group-hover:bg-[#00C2FF] group-hover:text-white group-hover:scale-110">
            {icon}
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-5">{description}</p>

          <div className="inline-flex items-center gap-2 text-[#00C2FF] font-semibold transition-all group-hover:gap-3">
            Ver cómo funciona
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Hover glow effect */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00C2FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:border-[#00C2FF]/30 hover:shadow-xl overflow-hidden">
        <div className="flex items-center justify-center w-14 h-14 bg-[#00C2FF]/10 border border-[#00C2FF]/20 text-[#00C2FF] rounded-xl mb-5">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function BenefitCard({ icon, title, description, index = 0 }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-secondary text-[#00C2FF] rounded-2xl mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
