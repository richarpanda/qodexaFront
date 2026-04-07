import { motion } from "motion/react";
import { Shield, Zap, Award, TrendingUp } from "lucide-react";

const FEATURES = [
  { id: "seguro",     Icon: Shield,     label: "Seguro y Confiable"    },
  { id: "rapido",     Icon: Zap,        label: "Implementación Rápida" },
  { id: "premium",    Icon: Award,       label: "Calidad Premium"       },
  { id: "roi",        Icon: TrendingUp,  label: "ROI Comprobado"        },
] as const;

export function TrustSection() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-slate-400 mb-12"
        >
          Empresas que confían en soluciones modernas
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {FEATURES.map(({ id, Icon, label }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-blue-500/10">
                <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
              </div>
              <p className="text-sm text-slate-300 text-center">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
