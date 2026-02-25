"use client"

import { HERO_DATA } from "@/viewmodels/site-data"
import Image from "next/image"
import { useEffect, useRef } from "react"

function ScrollArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  )
}

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="section-depth-1 relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax Background 0.4x */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 parallax-container" style={{ transform: "scale(1.1)" }}>
          <Image
            src={HERO_DATA.backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Overlays para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </div>

      {/* Content - Proporcao Aurea 62/38 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-[62%] max-lg:max-w-full">
          {/* Badge - zona top-left (cognitive heat zone) */}
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-foreground/15 bg-foreground/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-sm animate-reveal-fade">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-glow-pulse" />
            Consultoria Online
          </div>

          {/* Titulo - Oswald, impacto, tracking negativo */}
          <h1 className="mb-6 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
            <span className="block animate-reveal-up">{HERO_DATA.title}</span>
            <span className="block animate-reveal-up-delay text-foreground/70">
              {HERO_DATA.subtitle}
            </span>
          </h1>

          {/* Subtitulo - mais curto, mais impacto */}
          <p className="mb-12 max-w-lg text-base leading-relaxed text-muted-foreground animate-reveal-fade-delay lg:text-lg">
            {HERO_DATA.highlightText}
          </p>

          {/* CTAs - zona centro-direita (cognitive heat zone) */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-reveal-fade-delay-2">
            <a
              href={HERO_DATA.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_0%_100%_/_0.2)]"
            >
              <span className="relative z-10">{HERO_DATA.ctaText}</span>
              <span className="absolute inset-0 -translate-x-full bg-background/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground/70 transition-all duration-500 hover:border-foreground/30 hover:text-foreground"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - zona inferior central */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-subtle-float">
        <a href="#sobre" aria-label="Rolar para baixo" className="block text-foreground/30 transition-colors duration-300 hover:text-foreground/60">
          <ScrollArrow className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
