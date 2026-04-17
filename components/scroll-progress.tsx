"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] origin-left z-[9998]"
    />
  )
}

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/70"
    >
      {/* Mouse Icon */}
      <div className="w-6 h-10 border-2 border-white/50 rounded-xl mx-auto mb-2 relative">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-2 bg-white/70 rounded-full absolute top-2 left-1/2 -translate-x-1/2"
        />
      </div>
      <span className="text-xs font-medium tracking-wide">Scroll para explorar</span>
    </motion.div>
  )
}
