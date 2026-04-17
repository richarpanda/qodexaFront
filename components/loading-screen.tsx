"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const loadingText = "Cargando..."

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1628]"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <Image
                src="/logo_qodexa.png"
                alt="Qodexa"
                width={120}
                height={120}
                className="mx-auto drop-shadow-[0_0_30px_rgba(0,194,255,0.5)]"
              />
            </motion.div>

            {/* Spinner */}
            <div className="relative w-20 h-20 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-3 border-transparent border-t-[#00C2FF] rounded-full"
                style={{ borderWidth: "3px" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10px] border-3 border-transparent border-t-[#00E5A0] rounded-full"
                style={{ borderWidth: "3px" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20px] border-3 border-transparent border-t-[#60a5fa] rounded-full"
                style={{ borderWidth: "3px" }}
              />
            </div>

            {/* Loading Text */}
            <div className="text-white text-lg font-semibold tracking-wide">
              {loadingText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
