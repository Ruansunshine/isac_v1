"use client"

import { PLANS_DATA } from "@/viewmodels/site-data"
import { AnimatedSection } from "@/views/components/animated-section"
import { PlanCard } from "@/views/components/plan-card"

export function PlansSection() {
  return (
    <section id="planos" className="section-depth-6 relative overflow-hidden py-28 lg:py-36">
      {/* Luminance anchors */}
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-foreground/[0.02] blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-foreground/[0.015] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Planos de Consultoria
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Escolha Seu Plano
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
            Dois planos exclusivos desenvolvidos para atender diferentes necessidades.
            Ambos com acompanhamento completo e personalizado.
          </p>
        </AnimatedSection>

        {/* Plans Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {PLANS_DATA.map((plan, index) => (
            <AnimatedSection key={plan.id} delay={0} stagger={index} direction="up">
              <PlanCard plan={plan} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
