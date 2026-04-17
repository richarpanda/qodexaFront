"use client"

import { Check, Code, Headphones, TrendingUp, Target, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { SectionDivider } from "@/components/section-divider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { PromoBanner } from "@/components/promo-banner"
import { TrustBadges, GuaranteeBadge } from "@/components/trust-badges"
import { SpotsCounter, ComparisonTable, LimitedOffer } from "@/components/urgency-elements"

const benefits = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Desarrollo constante",
    description: "Nuevas funcionalidades cuando las necesites",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Soporte y mejoras",
    description: "Correcciones y optimizaciones continuas",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Escalabilidad",
    description: "Crecemos junto con tu negocio",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Acompañamiento estratégico",
    description: "No solo código, también dirección técnica",
  },
]

const plans = [
  {
    name: "STARTER",
    emoji: "🟢",
    price: "$8,000 MXN",
    ideal: "Negocios que necesitan soporte básico y mejoras puntuales.",
    features: [
      "Soporte técnico básico",
      "Automatizaciones simples",
      "Mejoras y ajustes menores",
      "Hasta 15 horas de desarrollo",
    ],
    cta: "Empezar con Starter",
    href: "https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20Starter",
    note: "Sin contratos largos · Cancela cuando quieras",
    highlighted: false,
  },
  {
    name: "GROWTH",
    emoji: "🔵",
    price: "$15,000 MXN",
    ideal: "Negocios en crecimiento que necesitan desarrollo continuo.",
    features: [
      "Todo lo de Starter",
      "Desarrollo de nuevas funcionalidades",
      "APIs e integraciones",
      "Automatización avanzada",
      "Soporte prioritario",
      "Hasta 30 horas de desarrollo",
    ],
    cta: "Empezar este mes",
    href: "https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20Growth",
    note: "Primeras 2 semanas con soporte ilimitado incluido",
    highlighted: true,
    badge: "⭐ Recomendado",
  },
  {
    name: "SCALE",
    emoji: "🟣",
    price: "$30,000 MXN",
    ideal: "Empresas que requieren soluciones completas y estratégicas.",
    features: [
      "Todo lo de Growth",
      "Desarrollo de apps / plataformas",
      "Infraestructura cloud",
      "Implementación de IA",
      "Consultoría estratégica",
      "Soporte VIP",
      "Hasta 60 horas de desarrollo",
    ],
    cta: "Hablemos de Scale",
    href: "https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20Scale",
    note: "Cupos limitados · Solo 10 clientes simultáneos",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "¿Qué pasa si necesito más horas?",
    answer: "Podemos ajustar tu plan o agregar horas adicionales según necesidad.",
  },
  {
    question: "¿Hay permanencia mínima?",
    answer: "No. Puedes cancelar en cualquier momento sin penalizaciones.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer: "Nos reunimos al inicio de cada mes para priorizar tareas. Usamos herramientas colaborativas para que siempre veas el progreso.",
  },
  {
    question: "¿Qué tecnologías usan?",
    answer: "Trabajamos con las tecnologías más modernas: React, Next.js, Node.js, Python, y más. Elegimos lo mejor para cada proyecto.",
  },
]

const process = [
  { step: "01", title: "Hablamos", description: "Entendemos tus necesidades y objetivos" },
  { step: "02", title: "Elegimos tu plan", description: "Seleccionamos el nivel adecuado" },
  { step: "03", title: "Empezamos", description: "Tu equipo de tecnología arranca desde el día 1" },
]

export default function TechPartnerPage() {
  const promoEndDate = new Date(Date.now() + 168 * 60 * 60 * 1000) // 1 week

  return (
    <main className="min-h-screen">
      <PromoBanner
        text="Oferta de lanzamiento:"
        highlight="Primer mes 50% OFF + Setup GRATIS"
        ctaText="Reclamar oferta"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20la%20oferta%20de%20Tech%20Partner%2050%25%20OFF"
        endDate={promoEndDate}
        variant="gift"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Tech Partner"
        title="Tu equipo de tecnología,"
        titleHighlight="sin contratar uno"
        subtitle="Nos encargamos del desarrollo, mejora y evolución tecnológica de tu negocio de forma continua."
        ctaText="Agendar llamada"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20Qodexa%20Tech%20Partner"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        floatingImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      <TrustBadges />

      <section className="py-8 bg-white text-center">
        <SpotsCounter spots={2} total={10} />
        <p className="text-muted-foreground mt-2 text-sm">Solo trabajamos con 10 clientes simultaneos</p>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-secondary text-[#00C2FF] rounded-2xl mx-auto mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Cómo funciona?
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00C2FF] text-white rounded-2xl font-bold text-xl mb-5 shadow-[0_8px_30px_rgba(0,194,255,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border-2 transition-all ${
                  plan.highlighted
                    ? "border-[#00C2FF] bg-gradient-to-b from-[#00C2FF]/5 to-white shadow-[0_20px_50px_rgba(0,194,255,0.15)] scale-105"
                    : "border-border bg-white hover:border-[#00C2FF]/30 hover:shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C2FF] text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C2FF] via-[#0A8FD4] to-[#00C2FF] rounded-t-3xl" />
                )}

                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#00C2FF] mb-2">{plan.price}<span className="text-lg font-normal text-muted-foreground"> / mes</span></div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Ideal para:</strong> {plan.ideal}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-[#00C2FF] text-white hover:bg-[#00A8E0] shadow-[0_10px_30px_rgba(0,194,255,0.3)]"
                      : "border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                <p className="text-center text-sm text-muted-foreground mt-3">{plan.note}</p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <p className="text-muted-foreground max-w-xl mx-auto">
              Solo trabajamos con 10 clientes simultaneos para garantizar calidad y atencion personalizada.
            </p>
          </AnimatedSection>

          {/* Comparison */}
          <AnimatedSection className="mt-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Tech Partner vs Contratar equipo interno
            </h3>
            <ComparisonTable />
          </AnimatedSection>

          {/* Guarantee */}
          <div className="max-w-2xl mx-auto mt-16">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LimitedOffer
            title="Pack Arranque Tech Partner"
            description="3 meses de plan Growth + Auditoria tecnologica completa + Roadmap estrategico + Setup de herramientas + Capacitacion"
            originalPrice="$60,000"
            offerPrice="$39,900"
            ctaText="Quiero este pack"
            ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Arranque%20Tech%20Partner"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/50 transition-colors">
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <svg
                    className="h-5 w-5 text-[#00C2FF] flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00C2FF]/20 relative overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para tener tu equipo tech?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Agenda una llamada y veamos cómo podemos ayudarte a crecer con tecnología.
            </p>
            <a
              href="https://wa.me/5215540279851?text=Hola,%20quiero%20más%20información%20sobre%20Tech%20Partner"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#00C2FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00A8E0] transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,194,255,0.3)]"
            >
              Agendar llamada gratis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
