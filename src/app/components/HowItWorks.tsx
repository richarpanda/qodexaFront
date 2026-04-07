import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Lightbulb, Cog } from "lucide-react";

const STEPS = [
  {
    id: "analisis",
    Icon: Search,
    number: "01",
    title: "Analizamos tu proceso",
    description: "Entendemos tu operación actual y detectamos oportunidades de mejora",
  },
  {
    id: "diseno",
    Icon: Lightbulb,
    number: "02",
    title: "Diseñamos la solución",
    description: "Creamos una arquitectura tecnológica personalizada para tu negocio",
  },
  {
    id: "automatizacion",
    Icon: Cog,
    number: "03",
    title: "Automatizamos",
    description: "Implementamos y ponemos en marcha tu nueva solución automatizada",
  },
] as const;

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // FIX: both transforms declared at top level, not inline inside JSX
  const bgY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [-30, 30]); // was inside JSX before

  return (
    <section ref={containerRef} className="relative py-20 bg-black" id="proceso">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        {/* FIX: uses top-level bgY2, not an inline hook call */}
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Cómo funciona
          </h2>
          <p className="text-slate-400 text-lg">Un proceso simple y transparente</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              aria-hidden="true"
            />

            {STEPS.map(({ id, Icon, number, title, description }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"
                      aria-hidden="true"
                    />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-400">
                      {number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
