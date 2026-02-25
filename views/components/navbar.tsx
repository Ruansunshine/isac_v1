"use client"

import { useState, useEffect } from "react"
import { NAV_ITEMS, LOGO_URL, SOCIAL_LINKS } from "@/viewmodels/site-data"
import { cn } from "@/lib/utils"
import Image from "next/image"

/* SVG Icons inline - sem lucide */
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="16" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const whatsapp = SOCIAL_LINKS.find((l) => l.platform === "whatsapp")

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isScrolled
            ? "bg-background/80 shadow-[0_1px_0_hsl(0_0%_100%_/_0.04)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Isac Fonseca Personal Trainer"
              width={48}
              height={48}
              className="h-10 w-10 rounded-lg object-cover lg:h-12 lg:w-12"
            />
            <div className="hidden sm:block">
              <span className="block font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Isac Fonseca
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                Personal Trainer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[13px] font-medium uppercase tracking-wider text-foreground/50 transition-colors duration-500 hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground/40 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          {whatsapp && (
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-all duration-500 hover:shadow-[0_0_25px_hsl(0_0%_100%_/_0.12)] lg:inline-flex"
            >
              Fale Comigo
            </a>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-10 rounded-lg p-2 text-foreground transition-colors lg:hidden"
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/[0.98] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden",
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-display text-2xl font-bold uppercase tracking-widest text-foreground transition-all duration-300 hover:text-foreground/60"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {item.label}
            </a>
          ))}
          {whatsapp && (
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-lg bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-500"
            >
              Fale Comigo
            </a>
          )}
        </div>
      </div>
    </>
  )
}
