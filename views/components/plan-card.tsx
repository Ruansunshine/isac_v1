"use client"

import { useState } from "react"
import type { Plan } from "@/models/types"
import { cn } from "@/lib/utils"

/* SVG icons inline */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

interface PlanCardProps {
  plan: Plan
}

export function PlanCard({ plan }: PlanCardProps) {
  const [isFlowOpen, setIsFlowOpen] = useState(false)

  return (
    <div className="perspective-card h-full">
      <div
        className={cn(
          "perspective-card-inner group relative flex h-full flex-col rounded-2xl border transition-all duration-500",
          plan.isPopular
            ? "border-foreground/20 bg-foreground/[0.04] shadow-[0_0_60px_-12px_hsl(0_0%_100%_/_0.08)]"
            : "border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/[0.12]"
        )}
      >
        {/* Glow na borda do Elite */}
        {plan.isPopular && (
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-foreground/10 via-transparent to-foreground/5 opacity-60" />
        )}

        {/* Popular badge */}
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-foreground/20 bg-foreground px-5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-background">
            {plan.badge}
          </div>
        )}

        <div className="relative flex flex-1 flex-col p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-foreground lg:text-2xl">
              {plan.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {plan.description}
            </p>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px bg-foreground/[0.06]" />

          {/* Benefits */}
          <div className="mb-8 flex-1 space-y-3">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">
              Beneficios
            </p>
            {plan.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-foreground/[0.08] text-foreground/50">
                  <CheckIcon className="h-3 w-3" />
                </div>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Fluxograma Accordion */}
          <div className="mb-6">
            <button
              onClick={() => setIsFlowOpen(!isFlowOpen)}
              className="flex w-full items-center justify-between rounded-lg border border-foreground/[0.06] bg-foreground/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground/[0.12]"
            >
              <span>Como Funciona</span>
              <ChevronDownIcon
                className={cn(
                  "h-4 w-4 text-foreground/40 transition-transform duration-300",
                  isFlowOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                isFlowOpen ? "mt-4 max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="space-y-2.5">
                {plan.flowSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 rounded-lg border border-foreground/[0.04] bg-foreground/[0.02] p-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-foreground/[0.06] font-display text-xs font-bold text-foreground/60">
                      {step.step}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{step.title}</p>
                      <p className="text-[11px] text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={plan.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-500",
              plan.isPopular
                ? "bg-foreground text-background hover:shadow-[0_0_30px_hsl(0_0%_100%_/_0.15)]"
                : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
            )}
          >
            {plan.ctaText}
          </a>
        </div>
      </div>
    </div>
  )
}
