import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onWhatsAppClick: () => void;
}

const TRUST_ITEMS = [
  { id: "gratis",       value: "Consulta gratis",  label: "Sin compromiso"      },
  { id: "respuesta",    value: "< 24 horas",        label: "Respuesta rápida"    },
  { id: "personalizado",value: "A tu medida",       label: "100% personalizado"  },
] as const;

export function FinalCTA({ onWhatsAppClick }: FinalCTAProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={reduce ? {} : { scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: reduce ? 0 : Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200"
                style={{ lineHeight: "1.2" }}
              >
                Deja de perder tiempo<br />con procesos manuales
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
              >
                Automatiza tu negocio y enfócate en lo que realmente genera valor
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  onClick={onWhatsAppClick}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <MessageCircle className="w-6 h-6 relative z-10" aria-hidden="true" />
                  <span className="relative z-10 text-xl font-bold">
                    Escríbenos por WhatsApp ahora
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm text-slate-400 mt-6"
              >
                Respuesta en menos de 24 horas
              </motion.p>
            </div>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
          >
            {TRUST_ITEMS.map(({ id, value, label }) => (
              <div key={id} className="text-center">
                <div className="text-lg font-bold text-blue-400 mb-1">{value}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
