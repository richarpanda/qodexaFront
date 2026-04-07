import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Zap, TrendingUp, ArrowRight } from "lucide-react";

const STORIES = [
  {
    id: "manual",
    Icon: AlertCircle,
    title: "Procesos Manuales",
    description: "Pérdida de tiempo, errores constantes, falta de control y escalabilidad limitada",
    color: "from-red-500 to-orange-500",
    glow: "rgba(239, 68, 68, 0.3)",
  },
  {
    id: "software",
    Icon: Zap,
    title: "Implementación de Software",
    description: "Automatización inteligente, procesos optimizados, datos en tiempo real",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "growth",
    Icon: TrendingUp,
    title: "Crecimiento Exponencial",
    description: "Más eficiencia, menos costos, mejor toma de decisiones, negocio escalable",
    color: "from-green-500 to-emerald-500",
    glow: "rgba(34, 197, 94, 0.3)",
  },
] as const;

export function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // FIX: all transforms declared at the top level, never inside JSX
  const titleScale   = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const bgY1         = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgY2         = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // FIX: per-card parallax at the top level (not inside a loop or JSX)
  const card0Y       = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const card1Y       = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const card2Y       = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // FIX: opacity logic — cards simply fade in and STAY visible (no erratic fade-out)
  const card0Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  const CARD_MOTION = [
    { y: card0Y, opacity: card0Opacity },
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
  ] as const;

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-black"
      id="storytelling"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px]"
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div style={{ scale: titleScale }} className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(to right, #ffffff, #60a5fa, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tu camino hacia la transformación digital
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            De procesos manuales a un negocio automatizado y escalable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-green-500/20"
            aria-hidden="true"
          />

          {STORIES.map((story, i) => {
            const { y, opacity } = CARD_MOTION[i];
            return (
              <motion.div key={story.id} style={{ y, opacity }} className="relative">
                <div
                  className="relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500"
                  style={{ boxShadow: `0 0 60px ${story.glow}` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    aria-hidden="true"
                    style={{ background: `radial-gradient(circle at center, ${story.glow}, transparent 70%)` }}
                  />

                  {/* Step badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center font-bold text-white`}
                      style={{ boxShadow: `0 0 24px ${story.glow}` }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="relative mb-6 inline-block">
                    <div
                      className="absolute inset-0 blur-xl"
                      aria-hidden="true"
                      style={{ background: `radial-gradient(circle, ${story.glow}, transparent 70%)` }}
                    />
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center`}>
                      <story.Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{story.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{story.description}</p>

                  {i < STORIES.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-10 h-10 text-blue-400/50" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          style={{ opacity: card2Opacity }}
          className="mt-16 text-center text-lg text-slate-400"
        >
          ¿Listo para comenzar tu transformación?{" "}
          <span className="text-cyan-400 font-semibold">Contáctanos ahora</span>
        </motion.p>
      </div>
    </section>
  );
}
