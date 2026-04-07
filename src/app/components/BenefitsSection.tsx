import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Timer, ShieldCheck, Rocket, BarChart3 } from "lucide-react";

const BENEFITS = [
  {
    id: "tiempo",
    Icon: Timer,
    metric: "70%",
    title: "Menos tiempo",
    description: "Reduce el tiempo en procesos manuales",
  },
  {
    id: "errores",
    Icon: ShieldCheck,
    metric: "95%",
    title: "Menos errores",
    description: "Elimina errores humanos en operaciones críticas",
  },
  {
    id: "productividad",
    Icon: Rocket,
    metric: "3×",
    title: "Más productividad",
    description: "Tu equipo se enfoca en lo que realmente importa",
  },
  {
    id: "escala",
    Icon: BarChart3,
    metric: "∞",
    title: "Escalabilidad",
    description: "Crece sin límites con sistemas que se adaptan",
  },
] as const;

export function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const bgY   = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-b from-slate-900 to-black"
      id="beneficios"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ scale }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Resultados que impactan
          </h2>
          <p className="text-slate-400 text-lg">Beneficios medibles desde el primer día</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {BENEFITS.map(({ id, Icon, metric, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div className="relative z-10 text-center">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 mb-4">
                  <Icon className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                </div>
                {/* FIX: added font-extrabold so metric numbers have proper visual weight */}
                <div className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {metric}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
