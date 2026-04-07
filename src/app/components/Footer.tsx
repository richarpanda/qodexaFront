import { motion } from "motion/react";
import { MessageCircle, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../../config";

interface FooterProps {
  onWhatsAppClick: () => void;
}

const SERVICES = [
  { id: "software", label: "Software a medida" },
  { id: "apis", label: "Desarrollo de APIs" },
  { id: "automatizacion", label: "Automatización de procesos" },
  { id: "web", label: "Plataformas web" },
  { id: "mobile", label: "Aplicaciones móviles" },
  { id: "cloud", label: "Soluciones cloud" },
  { id: "ia", label: "IA y Chatbots" },
] as const;

const SOCIAL = [
  { id: "linkedin", Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { id: "instagram", Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { id: "twitter", Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
] as const;

export function Footer({ onWhatsAppClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-950 to-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-12 md:h-16" />
            </div>
            <p className="text-slate-400 text-base md:text-lg mb-6 max-w-md leading-relaxed">
              Empresa de desarrollo de software a medida. Creamos sistemas, apps, plataformas web,
              APIs, soluciones cloud e IA para empresas que quieren crecer con tecnología propia.
            </p>
            <motion.button
              onClick={onWhatsAppClick}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">Contáctanos</span>
            </motion.button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {SERVICES.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href="#servicios"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li>
              
              </li>
              <li>
                {/* FIX: real email from config, not placeholder */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Síguenos</h4>
              <div className="flex gap-3">
                {SOCIAL.map(({ id, Icon, href, label }) => (
                  <motion.a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-950/20 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {year} Qodexa. Todos los derechos reservados.
            </p>
            <nav aria-label="Legal" className="flex gap-6 text-sm">
              {/* FIX: real links — replace "#" with actual pages when ready */}
              <a href="/privacidad" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                Privacidad
              </a>
              <a href="/terminos" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                Términos
              </a>
              <a href="/cookies" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        aria-hidden="true"
      />
    </footer>
  );
}