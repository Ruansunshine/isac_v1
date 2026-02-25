// ========================================
// MODELS - Tipagens e interfaces do domínio
// ========================================

export interface SocialLink {
  platform: "whatsapp" | "instagram"
  url: string
  label: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export interface HeroData {
  title: string
  subtitle: string
  highlightText: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
}

export interface AboutData {
  title: string
  subtitle: string
  paragraphs: string[]
  stats: Stat[]
}

export interface Stat {
  value: string
  label: string
}

export interface MethodData {
  title: string
  subtitle: string
  description: string
  features: MethodFeature[]
  image: string
}

export interface MethodFeature {
  icon: string
  title: string
  description: string
}

export interface PlanBenefit {
  text: string
}

export interface FlowStep {
  step: string
  title: string
  description: string
}

export interface Plan {
  id: string
  name: string
  badge?: string
  description: string
  benefits: PlanBenefit[]
  flowSteps: FlowStep[]
  isPopular: boolean
  ctaText: string
  ctaUrl: string
}

export interface ContactData {
  title: string
  subtitle: string
  whatsappUrl: string
  instagramUrl: string
  whatsappNumber: string
  instagramHandle: string
}

export interface FooterData {
  brandName: string
  tagline: string
  copyright: string
  socialLinks: SocialLink[]
}
