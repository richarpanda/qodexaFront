// ─── CONTACT CONFIGURATION ───────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "5215540279851"; // TODO: replace with your number

export const WHATSAPP_MESSAGE =
  "Hola! Me interesa automatizar mis procesos de negocio. ¿Podemos hablar?";

export const CONTACT_EMAIL = "contacto@qodexa.com";

export const SOCIAL_LINKS = {
  // linkedin: "https://linkedin.com/company/qodexa", // TODO: replace
  // instagram: "https://instagram.com/qodexa",       // TODO: replace
  // twitter: "https://twitter.com/qodexa",           // TODO: replace
  facebook: "https://www.facebook.com/profile.php?id=61579479347385",             // TODO: replace
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getWhatsAppUrl(): string {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
