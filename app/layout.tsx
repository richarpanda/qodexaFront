import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingScreen } from '@/components/loading-screen'
import { ParticlesBackground } from '@/components/particles-background'
import { ScrollProgress } from '@/components/scroll-progress'
import { KonamiCode, ConsoleEasterEgg, EasterEggStyles } from '@/components/easter-eggs'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Qodexa - Tu equipo de tecnología, sin contratar uno',
  description: 'Desarrollamos software, automatizamos procesos y potenciamos tu negocio con tecnología.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LoadingScreen />
        <ScrollProgress />
        <ParticlesBackground />
        <KonamiCode />
        <ConsoleEasterEgg />
        <EasterEggStyles />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
