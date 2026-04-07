/**
 * StickyWhatsAppButton
 * ─────────────────────────────────────────────────────────────────────────────
 * Always visible on mobile from the moment the user scrolls past the hero.
 * On desktop it shows as a small icon-only button at bottom-right to keep
 * the CTA persistent without obscuring content.
 *
 * - Appears after ~8% scroll (brief hero dwell time)
 * - CSS animate-ping for the pulse ring (GPU efficient, respects prefers-reduced-motion)
 * - No JS infinite loop animations
 */
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";

interface StickyWhatsAppButtonProps {
  onWhatsAppClick: () => void;
}

export function StickyWhatsAppButton({ onWhatsAppClick }: StickyWhatsAppButtonProps) {
  const { scrollYProgress } = useScroll();
  // Appears after 8% scroll — past the initial hero view
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.10], [0, 0, 1]);
  const scale   = useTransform(scrollYProgress, [0.08, 0.12], [0.85, 1]);
  const reduce  = useReducedMotion();

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-6 right-5 z-50"
    >
      {/* Mobile: pill with label */}
      <motion.button
        onClick={onWhatsAppClick}
        aria-label="Contactar por WhatsApp"
        className="md:hidden group relative flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
        whileHover={{ scale: reduce ? 1 : 1.06 }}
        whileTap={{ scale: reduce ? 1 : 0.94 }}
      >
        {!reduce && (
          <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" aria-hidden="true" />
        )}
        <MessageCircle className="w-5 h-5 relative z-10" aria-hidden="true" />
        <span className="relative z-10 font-semibold text-sm">WhatsApp</span>
      </motion.button>

      {/* Desktop: icon-only circle — unobtrusive but always reachable */}
      <motion.button
        onClick={onWhatsAppClick}
        aria-label="Contactar por WhatsApp"
        className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-110"
        whileTap={{ scale: reduce ? 1 : 0.92 }}
      >
        {!reduce && (
          <span className="absolute inset-0 rounded-full bg-blue-400/25 animate-ping" aria-hidden="true" />
        )}
        <MessageCircle className="w-5 h-5 relative z-10" aria-hidden="true" />
      </motion.button>
    </motion.div>
  );
}
