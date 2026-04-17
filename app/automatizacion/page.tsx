"use client"

import { Check, Zap, Clock, Cog, RefreshCw, Database, Mail, X, Workflow, TrendingUp, AlertCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/service-card"
import { SectionDivider } from "@/components/section-divider"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection } from "@/components/animated-section"
import { PromoBanner } from "@/components/promo-banner"
import { TrustBadges, GuaranteeBadge } from "@/components/trust-badges"
import { SpotsCounter, PricingCard, LimitedOffer } from "@/components/urgency-elements"
import { FAQSection } from "@/components/faq-section"

const faqs = [
  {
    question: "¿Qué herramientas pueden automatizar?",
    answer: "Trabajamos con casi cualquier software: Google Sheets, HubSpot, Salesforce, Slack, WhatsApp, Shopify, WordPress, Notion, Airtable, y cientos más vía Zapier, Make o APIs directas."
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer: "Automatizaciones simples pueden estar listas en 1-2 días. Flujos más complejos toman 1-2 semanas. Te damos tiempos específicos después del diagnóstico inicial."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Para nada. Nosotros hacemos todo el trabajo técnico. Tú solo nos dices qué proceso quieres automatizar y nosotros lo hacemos realidad."
  },
  {
    question: "¿Qué pasa si algo falla?",
    answer: "Configuramos alertas y monitoreo para detectar cualquier problema. Además, incluimos soporte post-implementación para resolver cualquier issue rápidamente."
  },
  {
    question: "¿Cuánto puedo ahorrar con automatización?",
    answer: "En promedio, nuestros clientes ahorran 15-20 horas semanales por proceso automatizado. Eso se traduce en miles de pesos mensuales en productividad recuperada."
  }
]

const problems = [
  "Tu equipo pierde horas en tareas repetitivas",
  "Hay errores frecuentes en procesos manuales",
  "Los datos están dispersos y desorganizados",
  "Dependes de una persona para procesos críticos",
]

const solutions = [
  { icon: <RefreshCw className="h-5 w-5" />, text: "Procesos automatizados 24/7" },
  { icon: <AlertCircle className="h-5 w-5" />, text: "Cero errores humanos" },
  { icon: <Database className="h-5 w-5" />, text: "Datos centralizados y sincronizados" },
  { icon: <TrendingUp className="h-5 w-5" />, text: "Escalabilidad sin límites" },
]

const features = [
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Flujos de trabajo automatizados",
    description: "Diseñamos flujos que conectan tus herramientas y eliminan trabajo manual",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Sincronización de datos",
    description: "Mantén tus sistemas actualizados automáticamente en tiempo real",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Notificaciones inteligentes",
    description: "Alertas automáticas por email, Slack o WhatsApp cuando algo importante sucede",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Procesos recurrentes",
    description: "Reportes, backups y tareas periódicas que se ejecutan solas",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Integraciones sin límites",
    description: "Conectamos cualquier software: CRMs, ERPs, hojas de cálculo, y más",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Ahorro de tiempo real",
    description: "Libera horas de trabajo para que tu equipo se enfoque en lo importante",
  },
]

const automations = [
  {
    title: "Ventas y CRM",
    items: ["Seguimiento automático de leads", "Actualización de pipelines", "Reportes de ventas automáticos"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marketing",
    items: ["Campañas de email automáticas", "Publicación en redes sociales", "Lead nurturing"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Operaciones",
    items: ["Gestión de inventarios", "Facturación automática", "Reportes financieros"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
]

export default function AutomatizacionPage() {
  const promoEndDate = new Date(Date.now() + 96 * 60 * 60 * 1000)

  return (
    <main className="min-h-screen">
      <PromoBanner
        text="Diagnóstico de automatización"
        highlight="GRATIS esta semana"
        ctaText="Agendar"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20mi%20diagnóstico%20de%20automatización%20gratis"
        endDate={promoEndDate}
        variant="limited"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Automatización de procesos"
        title="Elimina tareas repetitivas,"
        titleHighlight="multiplica resultados"
        subtitle="Conectamos tus herramientas, automatizamos tus procesos y liberamos a tu equipo para que se enfoque en lo que realmente importa."
        ctaText="Automatizar mi negocio"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20automatizar%20procesos%20en%20mi%20negocio"
        backgroundImage="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1920&q=80"
        floatingImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      <TrustBadges />

      <section className="py-8 bg-white text-center">
        <SpotsCounter spots={6} total={10} />
        <p className="text-muted-foreground mt-2 text-sm">Proyectos de automatizacion disponibles este mes</p>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Tu equipo esta ahogado en trabajo manual?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Las tareas repetitivas consumen tiempo valioso que podría invertirse en crecer tu negocio.
              </p>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                  >
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-foreground">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Con automatización inteligente
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white border border-[#00C2FF]/30 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-[#00C2FF]/10 rounded-lg text-[#00C2FF]">
                      {solution.icon}
                    </div>
                    <span className="text-foreground font-medium">{solution.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
            alt="Technology"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Automatización que funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conectamos cualquier herramienta y creamos flujos inteligentes que trabajan solos.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Automation Categories */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué podemos automatizar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde ventas hasta operaciones, automatizamos todo lo que frena tu crecimiento.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {automations.map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={automation.image}
                    alt={automation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {automation.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {automation.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#00C2FF] flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes de Automatizacion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde una automatizacion simple hasta transformacion digital completa
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Automatizacion Simple"
              price="$4,900"
              originalPrice="$7,900"
              discount="-38%"
              features={[
                "1 flujo automatizado",
                "Hasta 3 herramientas",
                "Configuracion completa",
                "Documentacion",
                "Soporte 1 mes",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20Automatización%20Simple"
            />
            <PricingCard
              title="Pack Productividad"
              price="$14,900"
              originalPrice="$22,900"
              discount="-35%"
              features={[
                "3 flujos automatizados",
                "Hasta 10 herramientas",
                "Dashboard de monitoreo",
                "Alertas configuradas",
                "Soporte 3 meses",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Productividad"
              popular
            />
            <PricingCard
              title="Transformacion Digital"
              price="$34,900"
              originalPrice="$49,900"
              discount="-30%"
              features={[
                "Flujos ilimitados",
                "Auditoria de procesos",
                "Integraciones custom",
                "Capacitacion equipo",
                "Soporte 6 meses",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20Transformación%20Digital"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        items={faqs}
        ctaText="Tengo otra pregunta sobre automatizacion"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20tengo%20una%20pregunta%20sobre%20automatización"
      />

      {/* Limited Offer */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LimitedOffer
            title="Pack Eficiencia Total"
            description="5 automatizaciones + Dashboard + Alertas + Capacitacion + Soporte anual + Revision trimestral"
            originalPrice="$45,000"
            offerPrice="$29,900"
            ctaText="Quiero este pack"
            ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Eficiencia%20Total"
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Listo para automatizar tu negocio?"
        subtitle="Hablemos de qué procesos podemos automatizar para liberar tiempo y recursos."
        ctaText="Quiero automatizar"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20automatizar%20procesos"
        secondaryCta={{ text: "Ver Tech Partner", href: "/tech-partner" }}
        variant="gradient"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
