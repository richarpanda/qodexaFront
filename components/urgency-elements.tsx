"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Calendar, Flame, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export function SpotsCounter({ spots = 3, total = 10 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-4 py-2"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-3 h-3 bg-orange-500 rounded-full"
      />
      <span className="text-orange-700 font-medium">
        Solo <span className="font-bold">{spots}</span> de {total} espacios disponibles este mes
      </span>
    </motion.div>
  )
}

export function SocialProofLive() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 left-4 z-50 bg-card border border-border rounded-lg shadow-xl p-4 max-w-xs"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-foreground">
            <span className="font-semibold">Carlos de CDMX</span> acaba de solicitar una cotizacion
          </p>
          <p className="text-xs text-muted-foreground mt-1">Hace 2 minutos</p>
        </div>
      </div>
    </motion.div>
  )
}

export function PricingCard({
  title,
  price,
  originalPrice,
  features,
  ctaText,
  ctaHref,
  popular = false,
  discount,
}: {
  title: string
  price: string
  originalPrice?: string
  features: string[]
  ctaText: string
  ctaHref: string
  popular?: boolean
  discount?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative bg-card rounded-2xl p-8 border-2 transition-shadow ${
        popular ? "border-primary shadow-xl shadow-primary/10" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Flame className="w-4 h-4" />
          Mas Popular
        </div>
      )}
      
      {discount && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold rotate-12">
          {discount}
        </div>
      )}

      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
      
      <div className="mb-6">
        {originalPrice && (
          <span className="text-muted-foreground line-through text-lg mr-2">
            {originalPrice}
          </span>
        )}
        <span className="text-4xl font-bold text-foreground">{price}</span>
        <span className="text-muted-foreground"> MXN</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all ${
          popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-muted text-foreground hover:bg-muted/80"
        }`}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

export function ComparisonTable() {
  const features = [
    { feature: "Tiempo de entrega", us: "2-4 semanas", others: "2-3 meses" },
    { feature: "Comunicacion directa", us: "Con el equipo", others: "Con intermediarios" },
    { feature: "Revisiones", us: "Ilimitadas", others: "2-3 max" },
    { feature: "Soporte post-lanzamiento", us: "3 meses incluidos", others: "Costo extra" },
    { feature: "Tecnologia", us: "Ultima generacion", others: "Templates antiguos" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      <div className="grid grid-cols-3 bg-muted/50 font-semibold">
        <div className="p-4 text-muted-foreground">Caracteristica</div>
        <div className="p-4 text-center bg-primary/10 text-primary">Qodexa</div>
        <div className="p-4 text-center text-muted-foreground">Agencias tradicionales</div>
      </div>
      {features.map((row, index) => (
        <div key={index} className="grid grid-cols-3 border-t border-border">
          <div className="p-4 text-foreground">{row.feature}</div>
          <div className="p-4 text-center bg-primary/5 text-primary font-medium">{row.us}</div>
          <div className="p-4 text-center text-muted-foreground">{row.others}</div>
        </div>
      ))}
    </motion.div>
  )
}

export function LimitedOffer({
  title,
  description,
  originalPrice,
  offerPrice,
  ctaText,
  ctaHref,
}: {
  title: string
  description: string
  originalPrice: string
  offerPrice: string
  ctaText: string
  ctaHref: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#0A1628] to-[#1a2a40] rounded-2xl p-8 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-[#00C2FF]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Flame className="w-6 h-6 text-orange-400" />
          </motion.div>
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
            Oferta por tiempo limitado
          </span>
        </div>

        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>

        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-2xl text-white/50 line-through">{originalPrice}</span>
          <span className="text-5xl font-bold text-[#00C2FF]">{offerPrice}</span>
          <span className="text-white/70">MXN</span>
        </div>

        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A1628] font-bold py-4 px-8 rounded-lg hover:bg-[#00C2FF]/90 transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  )
}
