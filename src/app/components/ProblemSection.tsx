import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Clock, FileWarning, TrendingDown } from "lucide-react";

const PROBLEMS = [
  {
    id: "manual",
    Icon: Clock,
    title: "Procesos manuales",
    description: "Pierdes horas en tareas repetitivas que deberían ser automáticas",
  },
  {
    id: "errores",
    Icon: FileWarning,
    title: "Errores frecuentes",
    description: "Los procesos manuales generan errores costosos y pérdida de datos",
  },
  {
    id: "control",
    Icon: TrendingDown,
    title: "Falta de control",
    description: "No tienes visibilidad real del estado de tus operaciones",
  },
  {
    id: "obsoleto",
    Icon: AlertCircle,
    title: "Sistemas obsoletos",
    description: "Tus herramientas actuales no escalan con tu negocio",
  },
] as const;

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Declared at top level — no hooks inside JSX
  const bgY     = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900"
      id="soluciones"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ opacity }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            ¿Te suena familiar?
          </h2>
          <p className="text-slate-400 text-lg">
            Problemas que frenan el crecimiento de tu empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PROBLEMS.map(({ id, Icon, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-full bg-red-500/10 mb-4">
                  <Icon className="w-6 h-6 text-red-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl mb-2 text-white font-bold">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
