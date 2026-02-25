"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "scale"
  stagger?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  stagger = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 })

  const directionStyles = {
    up: "translate-y-6 scale-[0.98]",
    left: "-translate-x-6 scale-[0.98]",
    right: "translate-x-6 scale-[0.98]",
    scale: "scale-[0.96]",
  }

  const totalDelay = delay + stagger * 120

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[cubic-bezier(0.23,1,0.32,1)]",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0"
          : `opacity-0 ${directionStyles[direction]} blur-[2px]`,
        className
      )}
      style={{
        transitionDelay: `${totalDelay}ms`,
        transitionDuration: "800ms",
      }}
    >
      {children}
    </div>
  )
}
