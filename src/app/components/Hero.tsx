import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";
import { AnimatedGrid } from "./AnimatedGrid";
import { FloatingElements } from "./FloatingElements";
import { Logo } from "./Logo";

interface HeroProps {
  onWhatsAppClick: () => void;
}

const SERVICES = [
  "Software a Medida",
  "Desarrollo Web",
  "Apps Móviles",
  "APIs & Integraciones",
  "Soluciones Cloud",
  "IA & Chatbots",
  "Automatización",
] as const;

export function Hero({ onWhatsAppClick }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Inicio"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/30"
          animate={reduce ? {} : { backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: reduce ? 0 : Infinity, repeatType: "reverse", ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Orbs — reduced blur size vs original for better GPU perf */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[80px]"
          animate={reduce ? {} : { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2], x: [0, 40, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[700px] h-[700px] bg-cyan-600/20 rounded-full blur-[80px]"
          animate={reduce ? {} : { scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25], x: [0, -25, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
        />
      </div>

      <AnimatedGrid />
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 blur-2xl opacity-50"
              aria-hidden="true"
              style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent 70%)" }}
            />
            
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-4"
        >
          <h1
            className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #e0f2fe, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Desarrollo de software
            <br />
            <span className="inline-block mt-2">a la medida</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 max-w-4xl mx-auto font-light"
        >
          Creamos sistemas, apps, plataformas web, APIs, soluciones en la nube e inteligencia artificial
        </motion.p>

        {/* Support line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto"
        >
          La automatización es solo el inicio. Construimos soluciones completas.
        </motion.p>

        {/* Service tags — string used as key instead of index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
              className="px-4 py-2 rounded-full text-sm md:text-base border border-blue-500/30 bg-blue-950/20 backdrop-blur-sm text-blue-200"
              style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
            >
              {service}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative inline-block"
        >
          {/* Pulse rings — skipped when reduced motion */}
          {!reduce && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/30"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-500/30"
                animate={{ scale: [1, 1.6, 1.6], opacity: [0.4, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
            </>
          )}

          <div
            className="absolute inset-0 blur-2xl rounded-full"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.6))",
              transform: "scale(1.3)",
            }}
          />

          <motion.button
            onClick={onWhatsAppClick}
            className="relative group px-10 py-5 md:px-12 md:py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 shadow-2xl"
            whileHover={{ scale: reduce ? 1 : 1.05 }}
            whileTap={{ scale: reduce ? 1 : 0.98 }}
            style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.6), 0 20px 60px rgba(0,0,0,0.5)" }}
          >
            {!reduce && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-3 text-xl md:text-2xl font-bold">
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
              Hablar por WhatsApp
            </span>
          </motion.button>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 flex items-center justify-center gap-2 text-cyan-300/80 text-sm md:text-base"
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          Respuesta rápida en minutos
        </motion.p>

        {/* Scroll indicator */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-blue-400/50 rounded-full p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-cyan-400 rounded-full mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}