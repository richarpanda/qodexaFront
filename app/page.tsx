"use client"

import { Globe, Bot, Zap, Smartphone, Target, Code, Rocket, Check, TrendingUp, Headphones, BarChart3 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard, BenefitCard } from "@/components/service-card"
import { SectionDivider } from "@/components/section-divider"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { ServiceCardPremium, ServiceCardSecondary } from "@/components/service-card-premium"
import { StatCard, AnimatedCounter } from "@/components/animated-counter"
import { ShimmerBadge, GlowBadge } from "@/components/shimmer-badge"
import { ScrollIndicator } from "@/components/scroll-progress"
import Link from "next/link"
import { ArrowRight, Users, Clock, Award, Briefcase, BarChart, Cog } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Páginas web",
    description: "Sitios que convierten visitantes en clientes",
    href: "/paginas-web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Chatbots con IA",
    description: "Atención automática 24/7 para tu negocio",
    href: "/chatbots",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización",
    description: "Elimina tareas repetitivas y ahorra tiempo",
    href: "/automatizacion",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Apps a la medida",
    description: "Aplicaciones que escalan contigo",
    href: "/apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
]

const processSteps = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Analizamos",
    description: "Entendemos tu negocio y detectamos oportunidades",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Diseñamos",
    description: "Creamos la solución ideal para tu caso",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Desarrollamos",
    description: "Construimos, lanzamos y mejoramos continuamente",
  },
]

const techPartnerFeatures = [
  "Desarrollo constante",
  "Soporte y mejoras",
  "Escalabilidad",
  "Acompañamiento estratégico",
]

const stats = [
  { value: "20+", label: "Proyectos entregados" },
  { value: "< 2h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Proyectos completados" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        eyebrow="Tu equipo tech, disponible hoy"
        title="Tu equipo de tecnología,"
        titleHighlight="sin contratar uno"
        subtitle="Desarrollamos software, automatizamos procesos y potenciamos tu negocio con tecnología — sin que tengas que armar un equipo interno."
        ctaText="Quiero mi diagnóstico gratis"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20mi%20diagnóstico%20gratuito%20con%20Qodexa"
        secondaryCta={{ text: "Ver servicios", href: "/paginas-web" }}
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
        stats={stats}
        floatingImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        showLogo
      />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      <SectionDivider />

      {/* Social Proof Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <ShimmerBadge variant="cyan">Resultados que hablan por si solos</ShimmerBadge>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard 
              value={20} 
              suffix="+" 
              label="Proyectos entregados" 
              icon={<Briefcase className="w-6 h-6" />}
              delay={0}
            />
            <StatCard 
              value={3} 
              suffix="x" 
              label="Mas rapido que equipo interno" 
              icon={<Clock className="w-6 h-6" />}
              delay={0.1}
            />
            <StatCard 
              value={2} 
              suffix="h" 
              label="Tiempo de respuesta" 
              icon={<Headphones className="w-6 h-6" />}
              delay={0.2}
            />
            <StatCard 
              value={100} 
              suffix="%" 
              label="Proyectos a tiempo" 
              icon={<Award className="w-6 h-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* What We Do - Process */}
      <section className="py-24 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Tech pattern"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creamos soluciones tecnológicas que resuelven problemas reales de tu negocio.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-[#00C2FF] text-white rounded-2xl mb-6 shadow-[0_8px_30px_rgba(0,194,255,0.3)]"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 194, 255, 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluciones que impulsan tu negocio
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Tech Partner Preview */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
            alt="Tech office"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 194, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 194, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glowing orb */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-br from-[#00C2FF]/20 to-transparent rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Necesitas desarrollo continuo?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Qodexa Tech Partner: tu equipo de tecnología por una mensualidad fija.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {techPartnerFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Check className="h-5 w-5 text-[#00C2FF] flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <Link
              href="/tech-partner"
              className="group inline-flex items-center gap-2 bg-[#00C2FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00A8E0] transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,194,255,0.3)]"
            >
              Conocer Tech Partner
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <TestimonialSection
        quote="Qodexa nos ayudó a automatizar todo nuestro proceso de ventas. Ahora cerramos 3x más deals con el mismo equipo."
        author="Carlos Mendoza"
        role="CEO"
        company="TechMex"
        metric="↑ 300% en conversiones"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* CTA Section */}
      <CTASection
        title="¿Listo para transformar tu negocio?"
        subtitle="Agenda una llamada gratuita y descubre cómo podemos ayudarte a crecer con tecnología."
        ctaText="Agendar diagnóstico gratis"
        ctaHref="https://wa.me/5215540279851?text=Hola,%20quiero%20agendar%20mi%20diagnóstico%20gratuito"
        secondaryCta={{ text: "Ver Tech Partner", href: "/tech-partner" }}
        variant="gradient"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
