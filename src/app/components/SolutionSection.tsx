import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Code2, Network, Workflow, Sparkles,
  Globe, Smartphone, Cloud, Bot,
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "software",
    Icon: Code2,
    title: "Software a medida",
    description: "Sistemas personalizados que se adaptan perfectamente a tu proceso de negocio",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "apis",
    Icon: Network,
    title: "APIs & Integraciones",
    description: "Conectamos tus sistemas existentes y automatizamos flujos de trabajo",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "automatizacion",
    Icon: Workflow,
    title: "Automatización",
    description: "Eliminamos tareas manuales repetitivas, ahorrando tiempo y reduciendo errores",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: "web",
    Icon: Globe,
    title: "Plataformas Web",
    description: "Aplicaciones web modernas, rápidas y escalables para tu negocio",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: "mobile",
    Icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "cloud",
    Icon: Cloud,
    title: "Soluciones Cloud",
    description: "Infraestructura escalable y segura en la nube para tu aplicación",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "ia",
    Icon: Bot,
    title: "IA & Chatbots",
    description: "Inteligencia artificial y chatbots para automatizar atención al cliente",
    gradient: "from-pink-500 to-rose-500",
  },
] as const;

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // FIX: all useTransform calls at top level — NOT inside JSX or callbacks
  const bgY1      = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgY2      = useTransform(scrollYProgress, [0, 1], [-30, 30]); // was inside JSX before
  const opacity   = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-slate-900"
      id="servicios"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl"
        />
        {/* FIX: y2 now uses the top-level transform, not an inline hook call */}
        <motion.div
          style={{ y: bgY2 }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div style={{ opacity }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
            <span className="text-sm text-blue-300">Soluciones completas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
            Todo lo que necesitas para crecer
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stack tecnológico completo para transformar tu negocio
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SOLUTIONS.map(({ id, Icon, title, description, gradient }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <div
                  className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
