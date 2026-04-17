"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Konami Code Easter Egg
export function KonamiCode() {
  const [activated, setActivated] = useState(false)
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // ↑↑↓↓←→←→BA
  const [inputSequence, setInputSequence] = useState<number[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.keyCode].slice(-10)
      setInputSequence(newSequence)

      if (newSequence.length === 10 && 
          newSequence.every((code, i) => code === konamiSequence[i])) {
        setActivated(true)
        setTimeout(() => setActivated(false), 5000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [inputSequence])

  return (
    <AnimatePresence>
      {activated && (
        <>
          {/* Rainbow filter on body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[10000] animate-rainbow-filter"
            style={{
              mixBlendMode: "overlay",
            }}
          />
          
          {/* Celebration particles */}
          <CelebrationParticles />
          
          {/* Success message */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="fixed top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-[10001] max-w-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <span className="font-medium">
                Codigo secreto activado! Has desbloqueado el modo arcoiris de Qodexa.
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function CelebrationParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    delay: i * 0.05,
    duration: 2 + Math.random() * 2,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}vw`, 
            y: "100vh",
            rotate: 0,
            opacity: 1,
          }}
          animate={{ 
            y: "-20vh",
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: particle.color }}
        />
      ))}
    </div>
  )
}

// Console Easter Egg
export function ConsoleEasterEgg() {
  useEffect(() => {
    const asciiArt = `
%c
 ██████╗  ██████╗ ██████╗ ███████╗██╗  ██╗ █████╗ 
██╔═══██╗██╔═══██╗██╔══██╗██╔════╝╚██╗██╔╝██╔══██╗
██║   ██║██║   ██║██║  ██║█████╗   ╚███╔╝ ███████║
██║▄▄ ██║██║   ██║██║  ██║██╔══╝   ██╔██╗ ██╔══██║
╚██████╔╝╚██████╔╝██████╔╝███████╗██╔╝ ██╗██║  ██║
 ╚══▀▀═╝  ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝

🚀 Qodexa - Tu equipo de tecnologia, sin contratar uno
`

    const styles = "color: #00C2FF; font-weight: bold; font-size: 10px; font-family: monospace;"

    console.log(asciiArt, styles)
    console.log("%c💡 ¿Interesado en trabajar con nosotros? Contactanos: contacto@qodexa.com.mx", "color: #00E5A0; font-size: 14px;")
    console.log("%c🎮 Prueba el codigo Konami: ↑↑↓↓←→←→BA", "color: #FFA500; font-size: 12px;")
    console.log("%c🔧 Desarrollado con Next.js, Tailwind CSS y Framer Motion", "color: #888; font-size: 11px;")
  }, [])

  return null
}

// Add global styles for rainbow animation
export function EasterEggStyles() {
  return (
    <style jsx global>{`
      @keyframes rainbow-filter {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
      
      .animate-rainbow-filter {
        animation: rainbow-filter 2s linear infinite;
        background: linear-gradient(
          45deg,
          rgba(255, 0, 0, 0.1),
          rgba(255, 165, 0, 0.1),
          rgba(255, 255, 0, 0.1),
          rgba(0, 128, 0, 0.1),
          rgba(0, 0, 255, 0.1),
          rgba(75, 0, 130, 0.1),
          rgba(238, 130, 238, 0.1)
        );
      }
    `}</style>
  )
}
