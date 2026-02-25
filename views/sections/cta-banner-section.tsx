"use client"

import { AnimatedSection } from "@/views/components/animated-section"
import { SOCIAL_LINKS } from "@/viewmodels/site-data"
import { WhatsAppIcon } from "@/views/components/social-buttons"

export function CtaBannerSection() {
  const whatsapp = SOCIAL_LINKS.find((l) => l.platform === "whatsapp")

  return (
    <section className="section-depth-5 relative overflow-hidden py-24 lg:py-32">
      {/* Luminance anchor maximo - zona de conversao */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.04] via-foreground/[0.02] to-foreground/[0.04]" />
      <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-foreground/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="mb-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
            Resultado nao vem de extremos,
          </h2>
          <p className="mb-8 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground/50 sm:text-3xl lg:text-[2.5rem]">
            vem de estrategia.
          </p>
          <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
            Nao vem de modinha, vem de constancia bem direcionada e planejamento
            inteligente. Se eu consegui transformar meu corpo e minha
            mentalidade, voce tambem pode.
          </p>

          {whatsapp && (
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-foreground px-10 py-5 text-sm font-bold uppercase tracking-wider text-background transition-all duration-500 hover:shadow-[0_0_50px_hsl(0_0%_100%_/_0.15)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="relative z-10">Quero Minha Consultoria</span>
              <span className="absolute inset-0 -translate-x-full bg-background/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0" />
            </a>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
