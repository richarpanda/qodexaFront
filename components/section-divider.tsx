"use client"

export function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C2FF]/40 to-transparent" />
    </div>
  )
}

export function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`relative ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
