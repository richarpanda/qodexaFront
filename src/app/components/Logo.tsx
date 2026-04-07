import logoImg from "../../assets/logo.png";

interface LogoProps {
  /** Tailwind height class, e.g. "h-10" */
  className?: string;
}

export function Logo({ className = "h-10" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Qodexa"
        className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]"
      />
      <span
        className="font-black tracking-[0.12em] text-xl leading-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(to right, #ffffff, #e0f2fe, #67e8f9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        QODEXA
      </span>
    </div>
  );
}
