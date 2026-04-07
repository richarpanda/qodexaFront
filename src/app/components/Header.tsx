import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
  onWhatsAppClick: () => void;
}

const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Beneficios", href: "#beneficios" },
] as const;

export function Header({ onWhatsAppClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // FIX: track real header height instead of hardcoding 72px
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  // Scroll listener — also used to close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  // FIX: measure real header height so mobile menu sits directly below it
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isScrolled]); // re-measure when padding changes on scroll

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ opacity: headerOpacity }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-4"
          }`}
      >
        <motion.div
          style={{ backdropFilter: `blur(${headerBlur}px)` }}
          className="absolute inset-0 bg-black/60 border-b border-blue-500/20"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.1), transparent)" }}
        />

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              aria-label="Qodexa — inicio"
              className="relative z-10"
              whileHover={{ scale: reduce ? 1 : 1.05 }}
              whileTap={{ scale: reduce ? 1 : 0.95 }}
            >
              <Logo className={isScrolled ? "h-8 md:h-10" : "h-10 md:h-12"} />
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
              {/* {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-slate-300 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))} */}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={onWhatsAppClick}
                aria-label="Contactar por WhatsApp"
                className="relative group px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full overflow-hidden"
                whileHover={{ scale: reduce ? 1 : 1.05 }}
                whileTap={{ scale: reduce ? 1 : 0.95 }}
                style={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              >
                {!reduce && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 font-semibold text-sm md:text-base">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </span>
              </motion.button>
{/* 
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden p-2 text-white"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button> */}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — positioned using measured header height, not a magic number */}
      {/* <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed left-0 right-0 z-40 lg:hidden"
        style={{ top: headerHeight }}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1" aria-label="Menú móvil">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-lg text-slate-300 hover:text-white transition-colors py-3 border-b border-blue-500/10 last:border-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: i * 0.06 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div> */}
    </>
  );
}
