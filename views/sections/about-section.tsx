"use client"

import { ABOUT_DATA } from "@/viewmodels/site-data"
import { AnimatedSection } from "@/views/components/animated-section"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="section-depth-2 relative overflow-hidden py-28 lg:py-36">
      {/* Luminance anchor - ponto de luz estrategico */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-foreground/[0.02] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-2xl lg:h-[620px]">
                <Image
                  src="/images/training.jpg"
                  alt="Isac Fonseca - Personal Trainer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              {/* Stats overlay - luminance anchor card */}
              <div className="absolute -bottom-6 -right-4 rounded-xl border border-foreground/10 bg-background/90 p-5 shadow-2xl backdrop-blur-md lg:-right-8">
                <div className="grid grid-cols-2 gap-5">
                  {ABOUT_DATA.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-2xl font-bold tracking-tight text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <div>
            <AnimatedSection direction="right">
              <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Sobre Mim
              </span>
              <h2 className="mb-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {ABOUT_DATA.title}
              </h2>
              <p className="mb-10 text-sm font-medium uppercase tracking-wider text-foreground/40">
                {ABOUT_DATA.subtitle}
              </p>
            </AnimatedSection>

            <div className="space-y-5">
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <AnimatedSection key={index} delay={0} stagger={index} direction="right">
                  <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px] lg:leading-relaxed">
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Decorative line */}
            <AnimatedSection delay={0} stagger={5} direction="right">
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-foreground/20" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  Prova Viva do Metodo
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
