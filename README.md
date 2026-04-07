# Qodexa — Landing Page

> **Empresa de desarrollo de software a medida para empresas**

---

## ¿Qué es esto?

Landing page de alta conversión para **Qodexa**, empresa de desarrollo de software. Diseñada para posicionar a Qodexa como socio tecnológico completo — no solo automatización, sino software a medida, apps, plataformas web, APIs, cloud e inteligencia artificial.

El objetivo principal es una sola acción: **iniciar una conversación por WhatsApp**.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Estilos | TailwindCSS v4 |
| Animaciones | Motion (Framer Motion v12) |
| Íconos | Lucide React |
| Fuentes | Syne (display) + Inter (body) |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── App.tsx                  # Raíz de la aplicación
│   ├── ScrollStory.tsx          # Experiencia cinematográfica de scroll
│   └── components/
│       ├── Header.tsx           # Navbar sticky con blur dinámico
│       ├── Hero.tsx             # Primera pantalla siempre visible
│       ├── Logo.tsx             # Logo SVG + wordmark
│       ├── Footer.tsx           # Footer completo con links y redes
│       └── StickyWhatsAppButton # CTA flotante persistente
├── config.ts                    # WhatsApp, email, redes — un solo lugar
└── styles/
    ├── index.css
    └── theme.css
```

---

## Experiencia de scroll

El corazón de la landing es `ScrollStory.tsx` — **600 vh de scroll narrativo** con una sola pantalla sticky que transiciona entre 4 fases:

```
┌─────────────────────────────────────────────────────┐
│  FASE 1 · EL PROBLEMA          p = 0.00 → 0.30      │
│  Tags flotantes de "caos" + headline en rojo        │
│  "Tu negocio está creciendo… pero tu tecnología no" │
├─────────────────────────────────────────────────────┤
│  FASE 2 · NUESTROS SERVICIOS   p = 0.30 → 0.60      │
│  4 cards detalladas con descripción + tech tags     │
│  Software · APIs · IA · Apps & Plataformas          │
├─────────────────────────────────────────────────────┤
│  FASE 3 · EL IMPACTO           p = 0.55 → 0.80      │
│  4 métricas animadas con contexto descriptivo       │
│  70% · 95% · 3× · ∞                                │
├─────────────────────────────────────────────────────┤
│  FASE 4 · CTA FINAL            p = 0.75 → 1.00      │
│  Card glassmorphism con botón WhatsApp              │
│  "Tu próximo proyecto de software empieza aquí"     │
└─────────────────────────────────────────────────────┘
```

Las transiciones usan `display: none` controlado por `useTransform` para que **ninguna fase sea visible cuando no le corresponde** — sin encimados, sin contenido fantasma.

---

## Características de diseño

- **Estilo futurista premium** — fondo negro, gradientes azul/cyan/esmeralda, grids perspectivados
- **Atmósferas de color por fase** — el fondo cambia de rojo (caos) → azul (solución) → esmeralda (resultados) → azul profundo (CTA)
- **Parallax de 3 capas** — grid profundo, orbs medios, shapes cercanos a velocidades distintas
- **Barra de progreso** — indica en qué punto de la historia está el usuario
- **Indicadores de fase** — 4 puntos en la derecha que se iluminan con cada sección
- **CTA persistente** — botón WhatsApp siempre accesible (mobile: pill con texto, desktop: ícono circular)
- **Reducción de movimiento** — todas las animaciones respetan `prefers-reduced-motion`

---

## Conversión

Todos los puntos de conversión llevan al mismo lugar: WhatsApp.

- Hero → botón principal con efecto pulse
- Header → botón compacto siempre visible
- ScrollStory fase 4 → CTA glassmorphism
- Footer → botón secundario
- Floating button → siempre presente en scroll

El número, mensaje pre-llenado y links de redes sociales se configuran en **un solo archivo**:

```ts
// src/config.ts
export const WHATSAPP_NUMBER = "5215512345678";
export const WHATSAPP_MESSAGE = "Hola! Me interesa...";
export const CONTACT_EMAIL    = "contacto@qodexa.com";
```

---

## SEO

- Meta tags completos: description, keywords, author, robots, canonical
- Open Graph para LinkedIn, Facebook y preview de WhatsApp
- Twitter Card
- Schema.org `Organization` para resultados enriquecidos de Google
- `lang="es"` y `locale="es_MX"`
- Fuentes con `preconnect` para carga rápida

---

## Correr el proyecto

```bash
npm install
npm run dev
```

```bash
npm run build    # build de producción
npm run preview  # previsualizar el build
```

---

## Antes de publicar

- [ ] Actualizar `WHATSAPP_NUMBER` en `src/config.ts`
- [ ] Actualizar `CONTACT_EMAIL` en `src/config.ts`
- [ ] Actualizar `SOCIAL_LINKS` en `src/config.ts`
- [ ] Reemplazar dominio `qodexa.com` en `index.html`
- [ ] Crear imagen OG (`public/og-image.png`, 1200×630px)
- [ ] Convertir logo a `.ico` → [favicon.io](https://favicon.io)

---

*Desarrollado con React + Vite + TailwindCSS v4 + Motion*
