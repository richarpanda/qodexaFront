"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  href?: string
}

export function RippleButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      size,
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e)
    onClick?.(e)
  }

  const variants = {
    primary: "bg-[#00C2FF] text-white hover:bg-[#00A8E0]",
    outline: "border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white",
    ghost: "text-[#00C2FF] hover:bg-[#00C2FF]/10",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const ButtonContent = (
    <button
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer" />
      </span>

      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonContent}
      </a>
    )
  }

  return ButtonContent
}
