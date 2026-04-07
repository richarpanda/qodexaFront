import { motion, useReducedMotion } from "motion/react";

export function AnimatedGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static base grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scrolling grid overlay — disabled when reduced motion is preferred */}
      {!reduce && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.4) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Horizontal scanning line */}
      {!reduce && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Vertical scanning line */}
      {!reduce && (
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}
