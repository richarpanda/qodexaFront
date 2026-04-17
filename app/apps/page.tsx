"use client"

import { Check, Smartphone, Cog, TrendingUp, Shield, Database, Layers, X, Code, Cloud, Zap, Users } from "lucide-react"
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
    question: "¿Cuanto cuesta desarrollar una app?",
    answer: "Depende de la complejidad. Un MVP basico puede iniciar desde $24,900 MXN, mientras que apps empresariales completas van desde $120,900 MXN. Te damos un presupuesto detallado despues del discovery."
  },
  {
    question: "¿Cuanto tiempo toma desarrollar una app?",
    answer: "Un MVP puede estar listo en 6-8 semanas. Apps mas complejas toman 3-6 meses. Siempre trabajamos con metodologia agil para entregar valor incremental."
  },
  {
    question: "¿Que tecnologias usan?",
    answer: "Usamos tecnologias modernas como React, Next.js, Node.js, React Native, PostgreSQL, y desplegamos en AWS, Vercel o Google Cloud segun las necesidades."
  },
  {
    question: "¿El codigo es mio?",
    answer: "100%. Todo el codigo fuente, documentacion y assets son de tu propiedad. Te damos acceso completo al repositorio desde el dia 1."
  },
  {
    question: "¿Que pasa despues del lanzamiento?",
    answer: "Incluimos soporte post-lanzamiento en todos nuestros planes. Tambien ofrecemos planes de mantenimiento mensual para actualizaciones y mejoras continuas."
  }
]

const problems = [
  "Las soluciones genéricas no se adaptan a tu negocio",
  "Pagas por funciones que no usas",
  "No puedes escalar con tu software actual",
  "Tus sistemas no se integran entre sí",
]

const solutions = [
  { icon: <Cog className="h-5 w-5" />, text: "Funcionalidades exactas que necesitas" },
  { icon: <TrendingUp className="h-5 w-5" />, text: "Escalabilidad sin límites" },
  { icon: <Database className="h-5 w-5" />, text: "Integración con tus sistemas" },
  { icon: <Shield className="h-5 w-5" />, text: "Control total de tu plataforma" },
]

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desarrollo personalizado",
    description: "Cada línea de código pensada para resolver tus problemas específicos",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Escalabilidad real",
    description: "Arquitectura diseñada para crecer junto con tu negocio",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Integración total",
    description: "Conectamos con tus sistemas existentes: CRMs, ERPs, APIs externas",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Infraestructura cloud",
    description: "Hosting en la nube con alta disponibilidad y rendimiento óptimo",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Seguridad empresarial",
    description: "Protección de datos, autenticación robusta y cumplimiento normativo",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Soporte continuo",
    description: "Mantenimiento, actualizaciones y mejoras después del lanzamiento",
  },
]

const appTypes = [
  { title: "Apps web", description: "Plataformas SaaS, dashboards, CRMs personalizados" },
  { title: "Apps móviles", description: "iOS y Android con tecnología nativa o multiplataforma" },
  { title: "Apps internas", description: "Herramientas para optimizar procesos de tu equipo" },
  { title: "Marketplaces", description: "Plataformas de compra-venta multi-vendor" },
  { title: "E-commerce", description: "Tiendas online con funcionalidades avanzadas" },
  { title: "Sistemas a medida", description: "Cualquier solución específica para tu industria" },
]

const process = [
  { step: "01", title: "Discovery", description: "Entendemos a fondo tu negocio, usuarios y objetivos" },
  { step: "02", title: "Diseño", description: "Creamos wireframes y prototipos funcionales" },
  { step: "03", title: "Desarrollo", description: "Construimos la app con tecnología de punta" },
  { step: "04", title: "Testing", description: "Probamos exhaustivamente antes del lanzamiento" },
  { step: "05", title: "Lanzamiento", description: "Desplegamos y monitoreamos la app en producción" },
  { step: "06", title: "Mejora continua", description: "Iteramos basándonos en feedback real de usuarios" },
]

export default function AppsPage() {
  const promoEndDate = new Date(Date.now() + 120 * 60 * 60 * 1000)

  return (
    <main className="min-h-screen">
      <PromoBanner
        text="MVP Sprint:"
        highlight="Tu app en 6 semanas con 15% OFF"
        ctaText="Cotizar MVP"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20cotizar%20un%20MVP%20con%20la%20promoción"
        endDate={promoEndDate}
        variant="urgency"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Apps a la medida"
        title="Software que se adapta a ti,"
        titleHighlight="no al revés"
        subtitle="Diseñamos y desarrollamos aplicaciones web y móviles que resuelven exactamente los problemas de tu negocio."
        ctaText="Cotizar mi app"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20desarrollar%20una%20app%20a%20la%20medida"
        backgroundImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80"
        floatingImage="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      <TrustBadges />

      <section className="py-8 bg-white text-center">
        <SpotsCounter spots={3} total={5} />
        <p className="text-muted-foreground mt-2 text-sm">Proyectos de desarrollo disponibles este trimestre</p>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿El software generico te esta limitando?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Las soluciones de estantería no fueron diseñadas para tu negocio específico.
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
                Con una app a la medida
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
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
            alt="Code"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Desarrollo de clase mundial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Usamos las mejores prácticas y tecnologías para crear apps robustas y escalables.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué tipo de apps desarrollamos?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border hover:border-[#00C2FF]/30 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro proceso
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 bg-secondary rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#00C2FF] text-white rounded-xl font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes de Desarrollo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde un MVP para validar tu idea hasta una plataforma empresarial completa
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="MVP Starter"
              price="$17,600"
              originalPrice="$24,900"
              discount="-29%"
              features={[
                "Funcionalidades core",
                "Diseño UI/UX basico",
                "Backend + Base de datos",
                "Deploy en produccion",
                "Soporte 1 mes",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20MVP%20Starter"
            />
            <PricingCard
              title="App Profesional"
              price="$35,400"
              originalPrice="$49,900"
              discount="-29%"
              features={[
                "Funcionalidades avanzadas",
                "UI/UX premium",
                "Integraciones API",
                "Panel de admin",
                "Analytics integrado",
                "Soporte 3 meses",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20la%20App%20Profesional"
              popular
            />
            <PricingCard
              title="Plataforma Enterprise"
              price="$87,000"
              originalPrice="$120,900"
              discount="-28%"
              features={[
                "Arquitectura escalable",
                "Multiples integraciones",
                "Seguridad enterprise",
                "Documentacion completa",
                "Capacitacion equipo",
                "Soporte 6 meses",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20la%20Plataforma%20Enterprise"
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
        ctaText="Tengo otra pregunta sobre desarrollo"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20tengo%20una%20pregunta%20sobre%20desarrollo%20de%20apps"
      />

      {/* Limited Offer */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LimitedOffer
            title="Pack Lanzamiento Startup"
            description="MVP completo + Landing page + Branding basico + Setup analytics + 3 meses de soporte + Mentoria de producto"
            originalPrice="$89,000"
            offerPrice="$59,900"
            ctaText="Quiero este pack"
            ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Lanzamiento%20Startup"
          />
        </div>
      </section> */}

      {/* CTA */}
      <CTASection
        title="¿Listo para convertir tu idea en realidad?"
        subtitle="Hablemos de tu proyecto y cómo podemos crear la app perfecta para tu negocio."
        ctaText="Cotizar mi app"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20desarrollar%20una%20app%20a%20la%20medida"
        secondaryCta={{ text: "Ver Tech Partner", href: "/tech-partner" }}
        variant="gradient"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
