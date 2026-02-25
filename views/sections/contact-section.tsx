"use client"

import { CONTACT_DATA } from "@/viewmodels/site-data"
import { AnimatedSection } from "@/views/components/animated-section"
import {
  WhatsAppIcon,
  InstagramIcon,
} from "@/views/components/social-buttons"

/* SVG Icon inline - sem lucide */
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contato" className="section-depth-2 relative overflow-hidden py-28 lg:py-36">
      {/* Luminance anchor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Contato
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {CONTACT_DATA.title}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
            {CONTACT_DATA.subtitle}
          </p>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <AnimatedSection delay={0} stagger={0} direction="up">
            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-8 text-center transition-all duration-500 hover:border-[#25D366]/30 hover:bg-[#25D366]/[0.04]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]/70 transition-all duration-500 group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] group-hover:scale-105">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-foreground">
                  WhatsApp
                </h3>
                <p className="text-sm text-muted-foreground">
                  {CONTACT_DATA.whatsappNumber}
                </p>
              </div>
            </a>
          </AnimatedSection>

          {/* Instagram */}
          <AnimatedSection delay={0} stagger={1} direction="up">
            <a
              href={CONTACT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-8 text-center transition-all duration-500 hover:border-[#E1306C]/30 hover:bg-[#E1306C]/[0.04]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E1306C]/10 text-[#E1306C]/70 transition-all duration-500 group-hover:bg-[#E1306C]/20 group-hover:text-[#E1306C] group-hover:scale-105">
                <InstagramIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-foreground">
                  Instagram
                </h3>
                <p className="text-sm text-muted-foreground">
                  {CONTACT_DATA.instagramHandle}
                </p>
              </div>
            </a>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection delay={0} stagger={2} direction="up">
            <div className="group flex flex-col items-center gap-4 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-8 text-center transition-all duration-500 hover:border-foreground/[0.12] hover:bg-foreground/[0.04] sm:col-span-2 lg:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/50 transition-all duration-500 group-hover:bg-foreground/[0.10] group-hover:text-foreground/80 group-hover:scale-105">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-foreground">
                  Localizacao
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sao Luis - MA
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Big CTA - zona quente final */}
        <AnimatedSection delay={0} stagger={3} className="mt-20 text-center">
          <a
            href={CONTACT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-foreground px-10 py-5 text-sm font-bold uppercase tracking-wider text-background transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_0%_100%_/_0.15)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="relative z-10">Comece Sua Transformacao</span>
            <span className="absolute inset-0 -translate-x-full bg-background/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
