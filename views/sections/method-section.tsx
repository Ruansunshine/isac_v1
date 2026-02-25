"use client"

import { METHOD_DATA } from "@/viewmodels/site-data"
import { AnimatedSection } from "@/views/components/animated-section"
import Image from "next/image"

/* SVG Icons - clean, minimal, no lucide */
function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}
function BrainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M10 21h4" /><path d="M12 17v4" />
    </svg>
  )
}
function TrendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  target: TargetIcon,
  brain: BrainIcon,
  "trending-up": TrendIcon,
  shield: ShieldIcon,
}

/* 3 Pilares do Metodo */
const pillars = [
  { label: "Ciencia", sublabel: "Base academica em fisiologia e biomecanica" },
  { label: "Estrategia", sublabel: "Planejamento inteligente e individualizado" },
  { label: "Aplicacao", sublabel: "Execucao pratica com acompanhamento real" },
]

export function MethodSection() {
  return (
    <section id="metodo" className="section-depth-3 relative overflow-hidden py-28 lg:py-36">
      {/* Luminance anchor */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-8 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Nosso Metodo
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {METHOD_DATA.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
            {METHOD_DATA.subtitle}
          </p>
        </AnimatedSection>

        {/* 3 Pilares - Progressao Narrativa */}
        <div className="mb-20 grid gap-px sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.label} delay={0} stagger={index} direction="up">
              <div className="group relative flex flex-col items-center py-10 text-center transition-all duration-500">
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-foreground lg:text-2xl">
                  {pillar.label}
                </h3>
                <p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground">
                  {pillar.sublabel}
                </p>
                {/* Divider entre pilares */}
                {index < pillars.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-foreground/10 sm:block" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Features + Image Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {METHOD_DATA.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || TargetIcon
              return (
                <AnimatedSection key={feature.title} delay={0} stagger={index} direction="up">
                  <div className="group rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] p-6 transition-all duration-500 hover:border-foreground/[0.12] hover:bg-foreground/[0.04] glow-anchor-hover">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground/60 transition-all duration-500 group-hover:bg-foreground/[0.10] group-hover:text-foreground">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Image */}
          <AnimatedSection direction="right">
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[520px]">
              <Image
                src={METHOD_DATA.image}
                alt="Metodo Intensi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm leading-relaxed text-foreground/80 lg:text-[15px]">
                  {METHOD_DATA.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
