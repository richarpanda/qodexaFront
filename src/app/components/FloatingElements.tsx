import { motion, useReducedMotion } from "motion/react";

const ELEMENTS = [
  { id: "orb-blue-top-left",   size: 200, left: "10%", top: "20%", duration: 15, delay: 0,  color: "rgba(59, 130, 246, 0.1)" },
  { id: "orb-cyan-top-right",  size: 300, left: "80%", top: "30%", duration: 20, delay: 2,  color: "rgba(6, 182, 212, 0.08)" },
  { id: "orb-blue-bot-left",   size: 150, left: "15%", top: "70%", duration: 18, delay: 4,  color: "rgba(59, 130, 246, 0.12)" },
  { id: "orb-cyan-bot-right",  size: 250, left: "70%", top: "60%", duration: 22, delay: 1,  color: "rgba(6, 182, 212, 0.1)" },
] as const;

export function FloatingElements() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {ELEMENTS.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: el.size,
            height: el.size,
            left: el.left,
            top: el.top,
            background: `radial-gradient(circle, ${el.color}, transparent)`,
          }}
          animate={
            reduce
              ? { opacity: 0.4 }
              : { y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }
          }
          transition={{
            duration: el.duration,
            repeat: reduce ? 0 : Infinity,
            ease: "easeInOut",
            delay: el.delay,
          }}
        />
      ))}

      {/* Rotating diamond */}
      <motion.div
        className="absolute right-1/4 top-1/3 w-32 h-32 border border-blue-500/20 rotate-45"
        animate={reduce ? {} : { rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
      />

      {/* Spinning pentagon */}
      <motion.div
        className="absolute left-1/3 bottom-1/4 w-24 h-24 border-2 border-cyan-500/20"
        animate={reduce ? {} : { rotate: [0, 360], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: reduce ? 0 : Infinity, ease: "linear" }}
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)",
        }}
      />
    </div>
  );
}
