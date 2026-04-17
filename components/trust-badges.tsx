"use client"

import { motion } from "framer-motion"
import { Shield, Clock, CreditCard, Headphones, Award, CheckCircle } from "lucide-react"

const badges = [
  { icon: Shield, text: "100% Seguro", subtext: "Datos protegidos" },
  { icon: Clock, text: "Entrega Rápida", subtext: "Cumplimos plazos" },
  { icon: CreditCard, text: "Pago Flexible", subtext: "50% inicio, 50% final" },
  { icon: Headphones, text: "Soporte 24/7", subtext: "Siempre disponibles" },
]

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.text}</p>
                <p className="text-xs text-muted-foreground">{badge.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GuaranteeBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 text-center"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="w-20 h-20 mx-auto mb-4 bg-emerald-500 rounded-full flex items-center justify-center"
      >
        <Award className="w-10 h-10 text-white" />
      </motion.div>
      <h3 className="text-2xl font-bold text-emerald-800 mb-2">
        Garantia de Satisfaccion
      </h3>
      <p className="text-emerald-700 mb-4">
        Si no estas 100% satisfecho con el resultado, trabajamos sin costo adicional hasta que lo estes.
      </p>
      <div className="flex items-center justify-center gap-2 text-emerald-600">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">Sin letra chica, sin sorpresas</span>
      </div>
    </motion.div>
  )
}
