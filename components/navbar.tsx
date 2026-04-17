"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { name: "Páginas web", href: "/paginas-web" },
  { name: "Chatbots con IA", href: "/chatbots" },
  { name: "Automatización", href: "/automatizacion" },
  { name: "Apps a la medida", href: "/apps" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image src="/logo_qodexa.png" alt="Qodexa" width={120} height={40}  />
            </motion.div>
            <span className={cn(
              "text-xl font-extrabold tracking-wider transition-colors",
              isScrolled ? "text-[#0A1628]" : "text-white"
            )}>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1 font-medium transition-colors",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              )}>
                Servicios
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border py-2 transition-all duration-200",
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                )}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/tech-partner" 
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              )}
            >
              Tech Partner
            </Link>
            <a
              href="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20saber%20más%20sobre%20Qodexa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00C2FF] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#00A8E0] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,194,255,0.3)]"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="py-2 space-y-1">
            <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Servicios</p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/tech-partner"
              className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tech Partner
            </Link>
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/5215540279851?text=Hola,%20me%20interesa%20saber%20más%20sobre%20Qodexa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#00C2FF] text-white px-5 py-3 rounded-lg font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
