"use client"

import { AnimatedSection } from "@/views/components/animated-section"

/* SVG Icons inline - sem dependencia de lucide */
function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  )
}
function DumbbellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6.5 6.5h11M6.5 17.5h11" />
      <rect x="2" y="6.5" width="4.5" height="11" rx="1" />
      <rect x="17.5" y="6.5" width="4.5" height="11" rx="1" />
      <path d="M12 6.5v11" />
    </svg>
  )
}
function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
function MessageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
function VideoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="5" width="15" height="14" rx="2" ry="2" />
      <polygon points="23 7 17 12 23 17 23 7" />
    </svg>
  )
}
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18" /><polyline points="18 17 12 11 8 15 3 10" />
    </svg>
  )
}

const benefits = [
  {
    icon: ClipboardIcon,
    title: "Avaliacao Completa",
    description: "Anamnese detalhada, fotos padronizadas, medidas corporais e testes para um diagnostico preciso.",
  },
  {
    icon: DumbbellIcon,
    title: "Treino Personalizado",
    description: "Planejamento individualizado com videos demonstrativos e ajustes periodicos para evolucao continua.",
  },
  {
    icon: SmartphoneIcon,
    title: "App Exclusivo",
    description: "Acesso completo ao seu treino pelo aplicativo com videos explicando a execucao correta.",
  },
  {
    icon: MessageIcon,
    title: "Suporte via WhatsApp",
    description: "Atendimento direto para tirar duvidas, orientar e acompanhar sua rotina de treino.",
  },
  {
    icon: VideoIcon,
    title: "Chamadas de Video",
    description: "Reunioes via Google Meet para alinhamento de metas e refinamento do treino.",
  },
  {
    icon: ChartIcon,
    title: "Relatorio de Evolucao",
    description: "Documento comparativo do seu progresso com analise tecnica e direcionamento estrategico.",
  },
]

export function BenefitsSection() {
  return (
    <section className="section-depth-4 relative overflow-hidden py-28 lg:py-36">
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-foreground/[0.015] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Diferenciais
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            O Que Voce Recebe
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
            Muito mais do que um treino. Um sistema completo de acompanhamento
            para garantir seus resultados.
          </p>
        </AnimatedSection>

        {/* Benefits Grid - hover depth illusion */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <AnimatedSection key={benefit.title} delay={0} stagger={index} direction="up">
                <div className="perspective-card h-full">
                  <div className="perspective-card-inner group relative h-full rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] p-6 transition-all duration-500 hover:border-foreground/[0.12] hover:bg-foreground/[0.04]">
                    {/* Glow on hover - luminance anchoring */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-700 group-hover:from-foreground/[0.03] group-hover:to-transparent group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground/50 transition-all duration-500 group-hover:bg-foreground/[0.10] group-hover:text-foreground/80 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
