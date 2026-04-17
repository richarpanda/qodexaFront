"use client"

import { Check, Globe, Zap, BarChart3, Search, Shield, Smartphone, ArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/service-card"
import { SectionDivider } from "@/components/section-divider"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { PromoBanner } from "@/components/promo-banner"
import { TrustBadges, GuaranteeBadge } from "@/components/trust-badges"
import { SpotsCounter, PricingCard, ComparisonTable, LimitedOffer } from "@/components/urgency-elements"
import { FAQSection } from "@/components/faq-section"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar mi página web?",
    answer: "Dependiendo de la complejidad, de 1 dia hasta 4 semanas. Landing pages simples pueden estar listas en 1 semana. Siempre te damos una fecha estimada antes de iniciar."
  },
  {
    question: "¿Puedo hacer cambios después de que esté lista?",
    answer: "Sí, incluimos un panel de administración fácil de usar para que puedas actualizar textos e imágenes. Además, ofrecemos 3 meses de soporte post-lanzamiento."
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer: "Trabajamos con revisiones ilimitadas hasta que quedes 100% satisfecho. Nuestro proceso incluye aprobación de mockups antes de empezar a desarrollar."
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer: "Sí, el primer año de hosting y dominio están incluidos. Después, el costo es de aproximadamente $1,500 MXN anuales."
  },
  {
    question: "¿Mi sitio será seguro?",
    answer: "Absolutamente. Incluimos certificado SSL, protección contra ataques básicos, y backups automáticos semanales."
  }
]

const problems = [
  "Tu sitio actual no genera leads ni ventas",
  "Se ve anticuado o no es responsive",
  "Carga lento y tiene problemas técnicos",
  "No apareces en Google cuando buscan tu servicio",
]

const solutions = [
  { icon: <Globe className="h-5 w-5" />, text: "Diseño moderno y profesional" },
  { icon: <Smartphone className="h-5 w-5" />, text: "100% responsive en todos los dispositivos" },
  { icon: <Zap className="h-5 w-5" />, text: "Velocidad de carga optimizada" },
  { icon: <Search className="h-5 w-5" />, text: "SEO técnico incluido" },
]

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Optimizado para conversión",
    description: "Cada elemento diseñado para guiar a tus visitantes hacia la acción",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO desde el inicio",
    description: "Estructura técnica que Google ama y que te ayuda a posicionar",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-first",
    description: "Experiencia perfecta en móviles, tablets y desktop",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Ultra rápido",
    description: "Carga en menos de 2 segundos para no perder visitantes",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Seguro y confiable",
    description: "SSL incluido, hosting premium y backups automáticos",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Fácil de actualizar",
    description: "Panel de administración intuitivo para que hagas cambios tú mismo",
  },
]

const includes = [
  "Diseño personalizado",
  "Desarrollo responsive",
  "SEO técnico básico",
  "Hosting primer año",
  "Certificado SSL",
  "Dominio incluido",
  "Formulario de contacto",
  "Integración con WhatsApp",
  "Google Analytics",
  "Capacitación de uso",
]

export default function PaginasWebPage() {
  // Promo ends in 48 hours from now
  const promoEndDate = new Date(Date.now() + 48 * 60 * 60 * 1000)

  return (
    <main className="min-h-screen">
      <PromoBanner
        text="Esta semana:"
        highlight="20% OFF en todas las páginas web"
        ctaText="Aprovechar"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20vi%20la%20promoción%20del%2020%25%20OFF%20en%20páginas%20web"
        endDate={promoEndDate}
        variant="urgency"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Páginas web que convierten"
        title="Tu sitio web debería ser tu mejor"
        titleHighlight="vendedor 24/7"
        subtitle="Diseñamos y desarrollamos sitios web que no solo se ven increíbles, sino que convierten visitantes en clientes."
        ctaText="Cotizar mi página web"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20cotizar%20una%20página%20web"
        backgroundImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80"
        floatingImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      <TrustBadges />

      {/* Spots Counter */}
      <section className="py-8 bg-white text-center">
        <SpotsCounter spots={4} total={10} />
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Tu sitio web actual te está costando clientes?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Un sitio web mal diseñado o lento puede alejar a los clientes potenciales antes de que siquiera vean lo que ofreces.
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
                Nosotros lo solucionamos
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

      {/* Features Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
            alt="Office"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Todo lo que necesitas para destacar online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada sitio web que creamos viene equipado con las herramientas necesarias para ayudarte a crecer.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0A1628]/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 194, 255, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0, 194, 255, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  ¿Qué incluye tu página web?
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {includes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 text-[#00C2FF] flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diseños que inspiran confianza
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes que se adaptan a tu negocio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Precios transparentes, sin costos ocultos
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Landing Page"
              price="$3,900"
              originalPrice="$5,200"
              discount="-25%"
              features={[
                "1 página de aterrizaje",
                "Diseño personalizado",
                "Formulario de contacto",
                "WhatsApp integrado",
                "Hosting 1 año",
                "SSL incluido",
              ]}
              ctaText="Cotizar ahora"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20Landing%20Page"
            />
            <PricingCard
              title="Sitio Profesional"
              price="$5,900"
              originalPrice="$7,500"
              discount="-20%"
              features={[
                "Hasta 5 páginas",
                "Blog integrado",
                "SEO técnico avanzado",
                "Panel administrador",
                "Google Analytics",
                "Soporte 3 meses",
              ]}
              ctaText="Cotizar ahora"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20Sitio%20Profesional"
              popular
            />
            <PricingCard
              title="E-commerce"
              price="$15,200"
              originalPrice="$17,200"
              discount="-17%"
              features={[
                "Tienda online completa",
                "Carrito de compras",
                "Pasarela de pago",
                "Inventario básico",
                "Envíos integrados",
                "Capacitación incluida",
              ]}
              ctaText="Cotizar ahora"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20plan%20E-commerce"
            />
          </div>

          {/* Comparison Table */}
          <AnimatedSection className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              ¿Por que elegirnos?
            </h3>
            <ComparisonTable />
          </AnimatedSection>

          {/* Guarantee */}
          <div className="max-w-2xl mx-auto">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        items={faqs}
        ctaText="Tengo otra pregunta"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20tengo%20una%20pregunta%20sobre%20páginas%20web"
      />

      {/* Limited Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LimitedOffer
            title="Pack Lanzamiento Completo"
            description="Landing page + Dominio + Hosting"
            originalPrice="$5,000"
            offerPrice="$3,900"
            ctaText="Quiero este pack"
            ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Lanzamiento%20Completo"
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Listo para tener un sitio web que vende?"
        subtitle="Hablemos de tu proyecto y cómo podemos ayudarte a destacar online."
        ctaText="Cotizar mi página web"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20cotizar%20una%20página%20web"
        secondaryCta={{ text: "Ver Tech Partner", href: "/tech-partner" }}
        variant="gradient"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
