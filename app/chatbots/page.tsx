"use client"

import { Check, Bot, MessageSquare, Clock, Brain, Zap, Users, BarChart3, X, Shield } from "lucide-react"
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
    question: "¿Cuánto cuesta implementar un chatbot?",
    answer: "Los precios varían según la complejidad. Un chatbot básico para FAQs inicia desde $8,900 MXN, mientras que soluciones avanzadas con IA conversacional van desde $11,200 MXN."
  },
  {
    question: "¿Funciona con WhatsApp?",
    answer: "Sí, integramos chatbots con WhatsApp Business, Facebook Messenger, Instagram, tu sitio web y más. Puedes tener el mismo bot en múltiples canales."
  },
  {
    question: "¿Qué tan inteligente es el chatbot?",
    answer: "Usamos modelos de IA como GPT-4 que entienden contexto, manejan conversaciones complejas y aprenden de las interacciones. No son simples bots de menú."
  },
  {
    question: "¿Puedo ver las conversaciones?",
    answer: "Absolutamente. Incluimos un panel donde puedes ver todas las conversaciones, métricas de satisfacción, preguntas frecuentes y más."
  },
  {
    question: "¿Qué pasa si el bot no sabe responder?",
    answer: "Configuramos handoff automático a un humano cuando el bot detecta que no puede resolver algo. Nunca dejas a un cliente colgado."
  }
]

const problems = [
  "Pierdes clientes porque no respondes a tiempo",
  "Tu equipo gasta horas respondiendo las mismas preguntas",
  "No tienes atención 24/7 y pierdes ventas de noche",
  "El servicio al cliente te cuesta demasiado",
]

const solutions = [
  { icon: <Clock className="h-5 w-5" />, text: "Respuestas instantáneas 24/7" },
  { icon: <Brain className="h-5 w-5" />, text: "Inteligencia artificial avanzada" },
  { icon: <MessageSquare className="h-5 w-5" />, text: "Conversaciones naturales" },
  { icon: <BarChart3 className="h-5 w-5" />, text: "Datos y métricas en tiempo real" },
]

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "IA Conversacional",
    description: "Chatbots que entienden contexto y responden de forma natural y personalizada",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Disponible 24/7",
    description: "Nunca pierdas una venta por no responder a tiempo, incluso de madrugada",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Escalamiento automático",
    description: "Atiende a miles de clientes simultáneamente sin aumentar costos",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Respuestas instantáneas",
    description: "Tiempo de respuesta de milisegundos para una experiencia perfecta",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics completo",
    description: "Métricas detalladas de conversaciones, conversiones y satisfacción",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Handoff a humanos",
    description: "Transferencia suave a agentes cuando se necesita atención personal",
  },
]

const useCases = [
  {
    title: "Atención al cliente",
    description: "Responde preguntas frecuentes, resuelve dudas y escala casos complejos",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Generación de leads",
    description: "Captura información de prospectos y califica leads automáticamente",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ventas automatizadas",
    description: "Guía a clientes en el proceso de compra y cierra ventas 24/7",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
]

export default function ChatbotsPage() {
  const promoEndDate = new Date(Date.now() + 72 * 60 * 60 * 1000)

  return (
    <main className="min-h-screen">
      <PromoBanner
        text="Lanzamiento IA:"
        highlight="Demo gratuita + Setup sin costo"
        ctaText="Reclamar"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20mi%20demo%20gratuita%20de%20chatbot"
        endDate={promoEndDate}
        variant="gift"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Chatbots con Inteligencia Artificial"
        title="Atención al cliente"
        titleHighlight="que nunca duerme"
        subtitle="Automatiza tu servicio al cliente con chatbots inteligentes que entienden, responden y convierten — las 24 horas del día."
        ctaText="Quiero automatizar mi atención"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20un%20chatbot%20con%20IA"
        backgroundImage="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1920&q=80"
        floatingImage="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      <TrustBadges />

      <section className="py-8 bg-white text-center">
        <SpotsCounter spots={2} total={5} />
        <p className="text-muted-foreground mt-2 text-sm">Proyectos de chatbot disponibles este mes</p>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Tu servicio al cliente es un cuello de botella?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada minuto que un cliente espera es una oportunidad perdida. La IA cambia las reglas del juego.
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
                Con nuestros chatbots IA
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
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
            alt="AI"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inteligencia artificial que trabaja para ti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros chatbots usan la última tecnología en IA para ofrecer experiencias excepcionales.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Casos de uso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un chatbot puede transformar múltiples áreas de tu negocio.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
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
              Planes de Chatbot con IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde chatbots simples hasta asistentes virtuales completos
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Chatbot Básico"
              price="$4,900"
              originalPrice="$8,900"
              discount="-33%"
              features={[
                "Respuestas a FAQs",
                "Integración WhatsApp",
                "Flujos predefinidos",
                "Panel de analytics",
                "Soporte 1 mes",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Chatbot%20Básico"
            />
            <PricingCard
              title="Chatbot IA Pro"
              price="$11,200"
              originalPrice="$15,900"
              discount="-29%"
              features={[
                "IA conversacional GPT",
                "Multi-canal",
                "Entrenamiento personalizado",
                "Handoff a humanos",
                "Analytics avanzado",
                "Soporte 3 meses",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Chatbot%20IA%20Pro"
              popular
            />
            <PricingCard
              title="Asistente Virtual"
              price="$22,200"
              originalPrice="$30,900"
              discount="-28%"
              features={[
                "IA avanzada personalizada",
                "Integración CRM",
                "Automatización de ventas",
                "Voz + Texto",
                "API personalizada",
                "Soporte dedicado",
              ]}
              ctaText="Cotizar"
              ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Asistente%20Virtual"
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
        ctaText="Tengo otra pregunta sobre chatbots"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20tengo%20una%20pregunta%20sobre%20chatbots"
      />

      {/* Limited Offer */}
      {/* <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LimitedOffer
            title="Pack Atención 360"
            description="Chatbot IA + Integración WhatsApp + Facebook + Web + Entrenamiento + Soporte 6 meses"
            originalPrice="$55,000"
            offerPrice="$39,900"
            ctaText="Quiero este pack"
            ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20el%20Pack%20Atención%20360"
          />
        </div>
      </section> */}

      {/* CTA */}
      <CTASection
        title="¿Listo para automatizar tu atención al cliente?"
        subtitle="Hablemos de cómo un chatbot puede transformar la forma en que atiendes a tus clientes."
        ctaText="Quiero mi chatbot con IA"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20implementar%20un%20chatbot%20con%20IA"
        secondaryCta={{ text: "Ver Tech Partner", href: "/tech-partner" }}
        variant="gradient"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
