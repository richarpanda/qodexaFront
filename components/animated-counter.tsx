"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      
      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * value)
        
        setCount(currentCount)

        if (now < endTime) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(value)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [isInView, value, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

export function StatCard({ value, suffix = "+", label, icon, delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative bg-card p-6 rounded-2xl border border-border text-center group hover:border-[#00C2FF]/30 transition-colors"
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#00C2FF]/10 rounded-xl text-[#00C2FF]">
          {icon}
        </div>
      )}
      
      <div className="text-3xl md:text-4xl font-bold text-[#00C2FF] mb-2">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: delay + 0.5 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E5A0] rounded-b-2xl"
      />
    </motion.div>
  )
}
