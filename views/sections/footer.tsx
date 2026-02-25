"use client"

import { FOOTER_DATA, LOGO_URL, NAV_ITEMS } from "@/viewmodels/site-data"
import {
  WhatsAppIcon,
  InstagramIcon,
} from "@/views/components/social-buttons"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={LOGO_URL}
                alt="Isac Fonseca"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <span className="block text-sm font-bold uppercase tracking-wider text-foreground">
                  {FOOTER_DATA.brandName}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {FOOTER_DATA.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Consultoria online personalizada para hipertrofia e emagrecimento
              com base cientifica e acompanhamento estrategico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Navegacao
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Servicos
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Consultoria Online
              </li>
              <li className="text-sm text-muted-foreground">
                Plano Performance
              </li>
              <li className="text-sm text-muted-foreground">Plano Elite</li>
              <li className="text-sm text-muted-foreground">
                Avaliacao Presencial
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {FOOTER_DATA.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${link.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  {link.platform === "whatsapp" ? (
                    <WhatsAppIcon className="h-4 w-4" />
                  ) : (
                    <InstagramIcon className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {FOOTER_DATA.copyright}
          </p>
          <p className="text-xs text-muted-foreground">
            Consultoria Intensi
          </p>
        </div>
      </div>
    </footer>
  )
}
