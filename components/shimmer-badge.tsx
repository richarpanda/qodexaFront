"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "success" | "cyan"
}

export function ShimmerBadge({ children, className, variant = "default" }: ShimmerBadgeProps) {
  const variants = {
    default: "bg-secondary text-foreground border-border",
    success: "bg-green-500/20 text-green-400 border-green-500/30",
    cyan: "bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF]/30",
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm overflow-hidden",
        variants[variant],
        className
      )}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ translateX: ["100%", "-100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </div>
  )
}

interface GlowBadgeProps {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export function GlowBadge({ children, icon, className }: GlowBadgeProps) {
  return (
    <div className={cn("relative inline-flex items-center gap-2", className)}>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-[#00C2FF]/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative bg-[#00C2FF]/20 text-[#00C2FF] px-4 py-2 rounded-full border border-[#00C2FF]/30 font-semibold text-sm flex items-center gap-2">
        {icon && (
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        )}
        {children}
      </div>
    </div>
  )
}
