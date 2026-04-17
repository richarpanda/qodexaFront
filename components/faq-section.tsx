"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  ctaText?: string
  ctaHref?: string
}

export function FAQSection({ 
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitas saber antes de empezar",
  items,
  ctaText = "Tengo otra pregunta",
  ctaHref = "https://wa.me/5215540279851"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
