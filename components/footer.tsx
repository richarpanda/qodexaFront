import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Qodexa" width={48} height={48} className="w-12 h-12" />
              <span className="text-2xl font-bold tracking-tight">QODEXA</span>
            </Link>
            <p className="mt-4 text-white/60 max-w-xs">
              Tu equipo de tecnologia, sin contratar uno. Desarrollamos software que impulsa tu negocio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/paginas-web" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Páginas web
                </Link>
              </li>
              <li>
                <Link href="/chatbots" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Chatbots con IA
                </Link>
              </li>
              <li>
                <Link href="/automatizacion" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href="/apps" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Apps a la medida
                </Link>
              </li>
              <li>
                <Link href="/tech-partner" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Tech Partner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5215540279851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-[#00C2FF] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +52 1 554 027 9851
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@qodexa.com"
                  className="flex items-center gap-2 text-white/60 hover:text-[#00C2FF] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hola@qodexa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Qodexa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors text-sm">
              Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors text-sm">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
