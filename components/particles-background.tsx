"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  const createParticle = useCallback((): Particle => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.1,
  }), [])

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 30 }, createParticle)
    setParticles(initialParticles)

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev]
        if (newParticles.length > 50) {
          newParticles.shift()
        }
        newParticles.push(createParticle())
        return newParticles
      })
    }, 500)

    return () => clearInterval(interval)
  }, [createParticle])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, particle.opacity, particle.opacity, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-[#00C2FF]/30"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  )
}
