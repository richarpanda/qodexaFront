import { Header } from "./components/Header";
import { Hero } from "./components/Hero";        // Static — always visible on load
import { ScrollStory } from "./ScrollStory";     // Cinematic narrative below the hero
import { Footer } from "./components/Footer";
import { StickyWhatsAppButton } from "./components/StickyWhatsAppButton";
import { getWhatsAppUrl } from "../config";

function openWhatsApp() {
  window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onWhatsAppClick={openWhatsApp} />
      <main>
        {/* Hero is static — always visible, no scroll dependency */}
        <Hero onWhatsAppClick={openWhatsApp} />
        {/* Scroll narrative starts after the hero: chaos → solution → benefits → CTA */}
        <ScrollStory onWhatsAppClick={openWhatsApp} />
      </main>
      <Footer onWhatsAppClick={openWhatsApp} />
      <StickyWhatsAppButton onWhatsAppClick={openWhatsApp} />
    </div>
  );
}
