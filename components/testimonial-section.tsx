"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  metric?: string
  backgroundImage?: string
}

export function TestimonialSection({
  quote,
  author,
  role,
  company,
  metric,
  backgroundImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
}: TestimonialProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 to-[#0A1628]/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00C2FF]/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
        >
          {metric && (
            <div className="inline-flex items-center gap-2 bg-[#00C2FF]/20 border border-[#00C2FF]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#00C2FF] font-semibold">{metric}</span>
            </div>
          )}

          <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00C2FF] to-[#0A8FD4] rounded-full flex items-center justify-center text-white font-bold text-lg">
              {author.charAt(0)}
            </div>
            <div>
              <div className="text-white font-semibold">{author}</div>
              <div className="text-white/60">
                {role} · {company}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
