import { useRef } from "react";
import {
  motion, useScroll, useTransform, useReducedMotion,
  useMotionTemplate, type MotionValue,
} from "motion/react";
import {
  MessageCircle, Sparkles, Code2, Network, Bot, Globe,
  Timer, ShieldCheck, Rocket, BarChart3, ArrowRight, Zap,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CHAOS_TAGS = [
  { id: "ct-a", text: "Sin Sistema Propio", x: "6%", y: "15%", rot: -13, delay: 0 },
  { id: "ct-b", text: "Datos Desconectados", x: "60%", y: "10%", rot: 8, delay: 0.04 },
  { id: "ct-c", text: "Procesos Manuales", x: "13%", y: "60%", rot: -6, delay: 0.02 },
  { id: "ct-d", text: "Apps Obsoletas", x: "66%", y: "67%", rot: 12, delay: 0.06 },
  { id: "ct-e", text: "Sin Escalabilidad", x: "2%", y: "43%", rot: -19, delay: 0.01 },
  { id: "ct-f", text: "Integración Imposible", x: "45%", y: "5%", rot: 4, delay: 0.05 },
  { id: "ct-g", text: "Sin Visibilidad", x: "75%", y: "33%", rot: -9, delay: 0.03 },
  { id: "ct-h", text: "Tecnología Limitante", x: "31%", y: "78%", rot: 16, delay: 0.07 },
] as const;

const SERVICES = [
  {
    id: "sv-a", Icon: Code2,
    name: "Software a Medida",
    desc: "Sistemas que se ajustan a tu proceso. Sin compromisos, sin licencias — 100% tuyo.",
    grad: "from-blue-500 to-cyan-500", rgb: "59,130,246", glow: "rgba(59,130,246,0.2)",
  },
  {
    id: "sv-b", Icon: Network,
    name: "APIs & Integraciones",
    desc: "Conectamos tus sistemas entre sí y con servicios externos sin fricciones.",
    grad: "from-cyan-500 to-teal-500", rgb: "6,182,212", glow: "rgba(6,182,212,0.2)",
  },
  {
    id: "sv-c", Icon: Bot,
    name: "IA & Chatbots",
    desc: "Automatiza atención al cliente y toma decisiones más inteligentes con IA.",
    grad: "from-violet-500 to-purple-500", rgb: "139,92,246", glow: "rgba(139,92,246,0.2)",
  },
  {
    id: "sv-d", Icon: Globe,
    name: "Apps & Plataformas",
    desc: "Plataformas web y apps móviles rápidas, escalables y con diseño que convierte.",
    grad: "from-teal-500 to-emerald-500", rgb: "20,184,166", glow: "rgba(20,184,166,0.2)",
  },
] as const;

const METRICS = [
  {
    id: "mt-a", Icon: Timer,
    value: "70%", label: "Menos tiempo",
    desc: "En tareas operativas repetitivas",
    iBg: "bg-emerald-500/10", iCol: "text-emerald-400", vGrad: "from-emerald-400 to-cyan-400",
  },
  {
    id: "mt-b", Icon: ShieldCheck,
    value: "95%", label: "Menos errores",
    desc: "Al eliminar procesos manuales críticos",
    iBg: "bg-cyan-500/10", iCol: "text-cyan-400", vGrad: "from-cyan-400 to-blue-400",
  },
  {
    id: "mt-c", Icon: Rocket,
    value: "3×", label: "Más productividad",
    desc: "Tu equipo enfocado en lo que importa",
    iBg: "bg-blue-500/10", iCol: "text-blue-400", vGrad: "from-blue-400 to-violet-400",
  },
  {
    id: "mt-d", Icon: BarChart3,
    value: "∞", label: "Escalabilidad",
    desc: "Sistemas que crecen contigo sin límite",
    iBg: "bg-violet-500/10", iCol: "text-violet-400", vGrad: "from-violet-400 to-pink-400",
  },
] as const;


// ── Sub-components ─────────────────────────────────────────────────────────────

function ChaosTag({ c, p }: { c: (typeof CHAOS_TAGS)[number]; p: MotionValue<number> }) {
  // Enter: scale up from 0 at start
  // Exit: fly UP off screen (positive y in screen = upward when negated → actually downward)
  //   wait — in framer motion, positive y = down. So to fly UP, use negative y on exit.
  const opacity = useTransform(p, [0.00, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const display = useTransform(p, (v) => (v > 0.30 ? "none" : "block"));
  const yExit = useTransform(p, [0.26, 0.42], [0, -180]);
  const scaleIn = useTransform(p, [0.00, 0.08], [0.4, 1]);
  const blurNum = useTransform(p, [0.26, 0.42], [0, 8]);
  const filter = useMotionTemplate`blur(${blurNum}px)`;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "absolute", left: c.x, top: c.y,
        opacity, y: yExit, scale: scaleIn, rotate: c.rot, filter,
        display,
        boxShadow: "0 0 18px rgba(239,68,68,0.35)",
      }}
      className="font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-lg border
                 border-red-500/40 bg-red-950/40 text-red-300
                 whitespace-nowrap pointer-events-none select-none"
    >
      {c.text}
    </motion.div>
  );
}

function ServiceCard({ s, idx, p }: { s: (typeof SERVICES)[number]; idx: number; p: MotionValue<number> }) {
  const enter = 0.30 + idx * 0.025;
  const settled = enter + 0.08;
  const yEnter = useTransform(p, [enter, settled], [120, 0]);
  const yExit = useTransform(p, [0.56, 0.68], [0, -140]);
  const opacity = useTransform(p, [enter, settled, 0.58, 0.68], [0, 1, 1, 0]);
  const scale = useTransform(p, [enter, settled, 0.58, 0.68], [0.85, 1, 1, 0.92]);
  const { Icon } = s;

  return (
    <motion.div
      style={{ opacity, y: yEnter, scale }}
      className="group relative flex flex-col p-6 rounded-2xl border border-slate-700/50
                 bg-slate-900/80 backdrop-blur-md overflow-hidden transition-all duration-300 text-left"
    >
      <motion.div style={{ y: yExit }} className="absolute inset-0" aria-hidden="true" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${s.grad} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: `inset 0 0 50px ${s.glow}, 0 0 1px rgba(${s.rgb},0.5)` }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + title */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${s.grad}`}
            style={{ boxShadow: `0 4px 16px ${s.glow}` }}
          >
            <Icon className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="text-white font-bold text-sm md:text-base leading-snug">{s.name}</h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 flex-1">
          {s.desc}
        </p>

       
      </div>
    </motion.div>
  );
}

function MetricCard({ m, idx, p }: { m: (typeof METRICS)[number]; idx: number; p: MotionValue<number> }) {
  const enter = 0.58 + idx * 0.025;
  const settled = enter + 0.08;
  const yEnter = useTransform(p, [enter, settled], [100, 0]);
  const opacity = useTransform(p, [enter, settled, 0.84, 0.90], [0, 1, 1, 0]);
  const scale = useTransform(p, [enter, settled, 0.84, 0.90], [0.75, 1, 1, 0.9]);
  const yExit = useTransform(p, [0.82, 0.90], [0, -100]);
  const { Icon } = m;

  return (
    <motion.div
      style={{ opacity, y: yEnter, scale }}
      className="group relative flex flex-col p-5 rounded-2xl border border-slate-700/30
                 bg-slate-900/60 backdrop-blur-sm hover:border-slate-600/50
                 transition-colors duration-300 text-center"
    >
      <motion.div style={{ y: yExit }} className="flex flex-col items-center">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-full ${m.iBg} mb-3`}>
          <Icon className={`w-5 h-5 ${m.iCol}`} aria-hidden="true" />
        </div>

        {/* Big number */}
        <div className={`text-4xl md:text-5xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${m.vGrad}`}>
          {m.value}
        </div>

        {/* Label */}
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">
          {m.label}
        </p>

        {/* Divider */}
        <div className={`w-8 h-px bg-gradient-to-r ${m.vGrad} mb-2 opacity-50`} />

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed">
          {m.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function ScrollStory({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {

  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  const showChaos = useTransform(p, (v) => v < 0.30 ? "block" : "none");
  const showSolution = useTransform(p, (v) => (v >= 0.35 && v < 0.60) ? "block" : "none");
  const showBenefits = useTransform(p, (v) => (v >= 0.55 && v < 0.80) ? "block" : "none");
  const showCTA = useTransform(p, (v) => v >= 0.75 ? "block" : "none");

  // ── Progress bar ────────────────────────────────────────────────────────────
  const barW = useTransform(p, [0, 1], ["0%", "100%"]);

  // ── Phase indicator dots ─────────────────────────────────────────────────────
  // Which phase is "active" shown by a dot getting bright
  const dot1 = useTransform(p, [0.00, 0.10, 0.30, 0.42], [1, 1, 1, 0.25]);
  const dot2 = useTransform(p, [0.28, 0.40, 0.58, 0.68], [0.25, 1, 1, 0.25]);
  const dot3 = useTransform(p, [0.56, 0.66, 0.82, 0.90], [0.25, 1, 1, 0.25]);
  const dot4 = useTransform(p, [0.80, 0.88, 1.00], [0.25, 1, 1]);

  // ── Background colour — continuous gradient morph ───────────────────────────
  // Chaos = dark red, Solution = dark blue, Benefits = dark emerald, CTA = deep blue
  const redOp = useTransform(p, [0.00, 0.06, 0.30, 0.42], [0.5, 1, 1, 0]);
  const blueOp = useTransform(p, [0.28, 0.42, 0.58, 0.68], [0, 1, 1, 0]);
  const greenOp = useTransform(p, [0.56, 0.68, 0.82, 0.90], [0, 1, 1, 0]);
  const ctaBgOp = useTransform(p, [0.80, 0.90, 1.00], [0, 1, 1]);

  // ── Parallax depth layers ───────────────────────────────────────────────────
  const deepY = useTransform(p, [0, 1], [0, -80]);
  const midY = useTransform(p, [0, 1], [0, -160]);

  // ── CHAOS headline — visible from p=0, exits 0.30-0.42 (was 0.22-0.30)
  const chaosOp = useTransform(p, [0.00, 0.05, 0.22, 0.28], [1, 1, 1, 0]);
  const chaosY = useTransform(p, [0.18, 0.28], [0, -120]);

  // ── SOLUTION headline — enters 0.30-0.42, exits 0.58-0.68 (was 0.48-0.56)
  const solOp = useTransform(p, [0.30, 0.40, 0.55, 0.65], [0, 1, 1, 0]);
  const solYEnter = useTransform(p, [0.28, 0.40], [50, 0]);
  const solYExit = useTransform(p, [0.55, 0.65], [0, -60]);

  // ── BENEFITS headline — enters 0.58-0.68, exits 0.82-0.90 (was 0.74-0.82)
  const benOp = useTransform(p, [0.55, 0.65, 0.78, 0.88], [0, 1, 1, 0]);
  const benYEnter = useTransform(p, [0.53, 0.65], [50, 0]);
  const benYExit = useTransform(p, [0.78, 0.88], [0, -60]);

  // ── CTA — enters 0.82, stays to 1.00 (was 0.70-0.80)
  const ctaOp = useTransform(p, [0.75, 0.85, 1.00], [0, 1, 1]);
  const ctaYIn = useTransform(p, [0.72, 0.85], [80, 0]);
  const ctaScale = useTransform(p, [0.72, 0.88], [0.9, 1]);

  // ── Perspective grid colour shifts (matched to new timing) ─────────────────
  const gridRed = useTransform(p, [0.00, 0.06, 0.30, 0.42], [0.12, 0.12, 0.12, 0]);
  const gridBlue = useTransform(p, [0.28, 0.42, 0.58, 0.68], [0, 0.12, 0.12, 0]);
  const gridGrn = useTransform(p, [0.56, 0.68, 0.82, 0.90], [0, 0.10, 0.10, 0]);

  return (
    // 500vh outer — gives ~400vh of actual scroll travel (100vh viewport)
    <div ref={ref} style={{ height: "900vh" }}>

      {/* ── Sticky viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Scroll progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 z-50" style={{ background: "rgba(255,255,255,0.06)" }}>
          <motion.div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" style={{ width: barW }} />
        </div>

        {/* Phase dots — right side */}
        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          {[dot1, dot2, dot3, dot4].map((d, i) => (
            <motion.div
              key={i}
              style={{ opacity: d }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          ))}
        </div>

        {/* ── LAYER A: deep background grid (slowest) ── */}
        <motion.div style={{ y: deepY }} className="absolute inset-[-10%] z-0 pointer-events-none" aria-hidden="true">
          <motion.div
            style={{
              opacity: gridRed,
              backgroundImage: "linear-gradient(to right,rgba(239,68,68,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(239,68,68,0.5) 1px,transparent 1px)",
              backgroundSize: "72px 72px",
              transform: "perspective(500px) rotateX(7deg)",
              transformOrigin: "center 65%",
            }}
            className="absolute inset-0"
          />
          <motion.div
            style={{
              opacity: gridBlue,
              backgroundImage: "linear-gradient(to right,rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(59,130,246,0.5) 1px,transparent 1px)",
              backgroundSize: "72px 72px",
              transform: "perspective(500px) rotateX(7deg)",
              transformOrigin: "center 65%",
            }}
            className="absolute inset-0"
          />
          <motion.div
            style={{
              opacity: gridGrn,
              backgroundImage: "linear-gradient(to right,rgba(16,185,129,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(16,185,129,0.5) 1px,transparent 1px)",
              backgroundSize: "72px 72px",
              transform: "perspective(500px) rotateX(7deg)",
              transformOrigin: "center 65%",
            }}
            className="absolute inset-0"
          />
        </motion.div>

        {/* ── LAYER B: colour atmospheres ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
          <motion.div style={{ opacity: redOp }} className="absolute inset-0">
            <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-red-900/35 blur-[90px]" />
            <div className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-orange-900/20 blur-[90px]" />
          </motion.div>
          <motion.div style={{ opacity: blueOp }} className="absolute inset-0">
            <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-800/30 blur-[90px]" />
            <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-800/25 blur-[90px]" />
          </motion.div>
          <motion.div style={{ opacity: greenOp }} className="absolute inset-0">
            <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-800/22 blur-[90px]" />
            <div className="absolute bottom-1/4 right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-800/20 blur-[90px]" />
          </motion.div>
          <motion.div style={{ opacity: ctaBgOp }} className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/25 blur-[90px]" />
          </motion.div>
          {/* subtle vignette */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)" }}
          />
        </div>

        {/* ── LAYER C: floating shapes (mid parallax) ── */}
        <motion.div style={{ y: midY }} className="absolute inset-0 z-[2] pointer-events-none" aria-hidden="true">
          {!reduce && (
            <>
              <motion.div
                className="absolute right-[22%] top-[25%] w-24 h-24 border border-blue-500/12 rotate-45"
                animate={{ rotate: [45, 90, 45], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute left-[16%] bottom-[18%] w-18 h-18 border border-cyan-500/12"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{ clipPath: "polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%)" }}
              />
            </>
          )}
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
    CONTENT — all phases in one z-10 layer
════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 z-10">

          {/* ── PHASE 1: CHAOS ──────────────────────────────────────────── */}
          <motion.div style={{ display: showChaos }}>

            {CHAOS_TAGS.map((c) => (
              <ChaosTag key={c.id} c={c} p={p} />
            ))}

            <motion.div
              style={{ opacity: chaosOp, y: chaosY }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 mb-7">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">
                  El problema
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] mb-5"
                style={{
                  background: "linear-gradient(to bottom,#fca5a5,#ef4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                Tu negocio está creciendo…
                <br />pero tu tecnología no.
              </h2>

              <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                Procesos manuales, sistemas desconectados y apps que ya no escalan.
                Cada día pierdes tiempo, dinero y oportunidades.
                <br /><br />
                ⚠️ Esto es lo que frena a la mayoría de empresas hoy.
              </p>
            </motion.div>



          </motion.div>


          {/* ── PHASE 2: SOLUTIONS ──────────────────────────────────────── */}
          {/* Headline rises from below while chaos exits up */}
          <motion.div style={{ display: showSolution }}>


            <motion.div
              style={{ opacity: solOp, y: solYEnter }}
              className="absolute inset-x-0 top-[15%] flex flex-col items-center text-center px-6 pb-4"
            >
              <motion.div style={{ y: solYExit }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Nuestros servicios</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] mb-3"
                  style={{ background: "linear-gradient(135deg,#ffffff,#93c5fd,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Desarrollo completo,
                  <br />de principio a fin
                </h2>
                <p className="text-slate-400 mb-6 text-sm md:text-base">
                  Transformamos ese caos en sistemas que sí escalan <br />
                  Software a medida, apps, plataformas web, APIs, cloud e IA — todo bajo un mismo equipo
                </p>
              </motion.div>
            </motion.div>

            {/* Service cards grid — each rises independently */}
            <div className="absolute inset-x-0 bottom-[6%] flex justify-center px-5">
              <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} idx={i} p={p} />)}
              </div>
            </div>
          </motion.div>

          {/* ── PHASE 3: BENEFITS ───────────────────────────────────────── */}
          <motion.div style={{ display: showBenefits }}>

            <motion.div
              style={{ opacity: benOp, y: benYEnter }}
              className="absolute inset-x-0 top-[14%] flex flex-col items-center text-center px-6"
            >
              <motion.div style={{ y: benYExit }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-5">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                    El impacto
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] mb-3"
                  style={{
                    background: "linear-gradient(135deg,#ffffff,#a7f3d0,#67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                  Resultados reales,
                  <br />desde el primer sprint
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                  Empresas que dejan de improvisar y construyen sobre tecnología propia ven estos resultados desde el primer mes.
                </p>
              </motion.div>
            </motion.div>

            <div className="absolute inset-x-0 bottom-[10%] flex justify-center px-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
                {METRICS.map((m, i) => (
                  <MetricCard key={m.id} m={m} idx={i} p={p} />
                ))}
              </div>
            </div>

          </motion.div>


          {/* ── PHASE 4: CTA ────────────────────────────────────────────── */}
          <motion.div style={{ display: showCTA }}>

            <motion.div
              style={{ opacity: ctaOp, y: ctaYIn, scale: ctaScale }}
              className="absolute inset-0 flex items-end justify-center pb-24 px-5"
            >
              <div className="relative w-full max-w-xl">
                <div
                  className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.2))" }}
                />

                <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/40 text-center overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/6 via-transparent to-cyan-500/6" />

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight"
                      style={{
                        background: "linear-gradient(135deg,#ffffff,#93c5fd,#22d3ee)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                      Tu próximo proyecto de software
                      <br />empieza aquí.
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                      Cuéntanos tu idea. Te ayudamos a convertirla en un producto real, escalable y a tu medida.
                    </p>

                    <button
                      onClick={onWhatsAppClick}
                      className="group relative inline-flex items-center gap-3 px-9 py-5 bg-gradient-to-r from-blue-600 to-cyan-500
                       text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300
                       hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]"
                    >
                      <MessageCircle className="w-6 h-6 relative z-10" />
                      <span className="relative z-10">Escríbenos por WhatsApp</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <p className="flex items-center justify-center gap-2 text-cyan-300/70 text-sm mt-5">
                      <Sparkles className="w-3.5 h-3.5" />
                      ⚡ Respuesta rápida en minutos
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>{/* /sticky */}
    </div>
  );
}