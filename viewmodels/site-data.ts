// ========================================
// VIEWMODELS - Dados e lógica do site
// Centralize TODOS os textos e dados aqui
// para facilitar manutenção e alterações
// ========================================

import type {
  SocialLink,
  NavItem,
  HeroData,
  AboutData,
  MethodData,
  Plan,
  ContactData,
  FooterData,
} from "@/models/types"

// ---- Links Sociais ----
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "whatsapp",
    url: "https://wa.me/5598985891957?text=Ol%C3%A1%20Isac!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria.",
    label: "WhatsApp",
    icon: "whatsapp",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/isac.trainer",
    label: "Instagram",
    icon: "instagram",
  },
]

// ---- Navegação ----
export const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Metodo", href: "#metodo" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
]

// ---- Hero ----
export const HERO_DATA: HeroData = {
  title: "Transforme Seu Corpo,",
  subtitle: "Transforme Sua Vida.",
  highlightText:
    "Consultoria online personalizada com ciencia e estrategia para resultados reais em hipertrofia e emagrecimento.",
  ctaText: "Quero Comecar Agora",
  ctaUrl:
    "https://wa.me/5598985891957?text=Ol%C3%A1%20Isac!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria.",
  backgroundImage: "/images/hero-bg.jpg",
}

// ---- Sobre ----
export const ABOUT_DATA: AboutData = {
  title: "Quem e Isac Fonseca?",
  subtitle: "Ciencia + Pratica + Experiencia Real",
  paragraphs: [
    "Sou formado em Educacao Fisica pela Universidade Federal do Maranhao (UFMA), uma das instituicoes mais respeitadas do estado. Construi minha base profissional com muito estudo, dedicacao e aprofundamento na ciencia do treinamento.",
    "Uni o conhecimento academico com 6 anos de vivencia pratica intensa na musculacao. Vivi na pele os desafios, os erros, os acertos, os platos e as frustracoes que todo aluno enfrenta.",
    "Ja pesei 90kg com mais de 40% de gordura corporal. Sei como e se olhar no espelho e nao gostar do que ve. A minha transformacao fisica nao mudou apenas meu corpo, mudou minha mentalidade, minha disciplina e minha confianca.",
    "Se eu consegui transformar meu corpo e minha mentalidade, voce tambem pode. E eu vou te mostrar o caminho.",
  ],
  stats: [
    { value: "6+", label: "Anos de Pratica" },
    { value: "UFMA", label: "Formacao Academica" },
    { value: "100%", label: "Personalizado" },
    { value: "24h", label: "Entrega do Treino" },
  ],
}

// ---- Metodo Intensi ----
export const METHOD_DATA: MethodData = {
  title: "Metodo Intensi",
  subtitle: "Ciencia atualizada + estrategias inteligentes + aplicacao pratica real",
  description:
    "O Metodo Intensi e um protocolo de treinamento exclusivo, desenvolvido a partir de 4 anos de formacao academica em Educacao Fisica, aliados a 7 anos de experiencia pratica na musculacao. Criado para unir ciencia atualizada, estrategias inteligentes de treino e aplicacao pratica real, com um unico objetivo: acelerar seus resultados de forma otimizada e sustentavel.",
  features: [
    {
      icon: "target",
      title: "Treino Estrategico",
      description:
        "Nada de treino generico. Cada protocolo e estruturado e ajustado para extrair o maximo do seu potencial.",
    },
    {
      icon: "brain",
      title: "Base Cientifica",
      description:
        "Fisiologia, biomecanica e prescricao de treino com base em evidencias cientificas atualizadas.",
    },
    {
      icon: "trending-up",
      title: "Resultados Visiveis",
      description:
        "Saia da estagnacao, treine com proposito e tenha resultados que voce consegue ver e sentir.",
    },
    {
      icon: "shield",
      title: "Metodo Validado",
      description:
        "Validado na pratica com dezenas de alunos que alcancaram suas metas de hipertrofia e emagrecimento.",
    },
  ],
  image: "/images/method.jpg",
}

// ---- Planos ----
export const PLANS_DATA: Plan[] = [
  {
    id: "performance",
    name: "Plano Performance",
    description:
      "Acompanhamento completo para quem busca resultados consistentes com suporte direto.",
    benefits: [
      { text: "Avaliacao fisica online a cada 2 meses" },
      { text: "Aplicativo exclusivo com videos demonstrativos" },
      { text: "Treino 100% personalizado com ajustes mensais" },
      { text: "Suporte via WhatsApp (07h as 17h)" },
      { text: "Grupo exclusivo no WhatsApp" },
      { text: "Chamada de video 1x por mes" },
      { text: "Relatorio de evolucao bimestral" },
    ],
    flowSteps: [
      {
        step: "01",
        title: "Confirmacao do Pagamento",
        description: "Inicio imediato do acompanhamento",
      },
      {
        step: "02",
        title: "Envio da Anamnese",
        description: "Formulario completo sobre seu historico e objetivos",
      },
      {
        step: "03",
        title: "Avaliacao Fisica Online",
        description: "Analise por fotos, medidas e informacoes da anamnese",
      },
      {
        step: "04",
        title: "Entrega do Treino em 24h",
        description: "Treino personalizado conforme seu objetivo",
      },
      {
        step: "05",
        title: "Acompanhamento Continuo",
        description: "Suporte e ajustes estrategicos constantes",
      },
      {
        step: "06",
        title: "Reavaliacao Bimestral",
        description: "Comparativo de resultados e atualizacao do plano",
      },
    ],
    isPopular: false,
    ctaText: "Escolher Performance",
    ctaUrl:
      "https://wa.me/5598985891957?text=Ol%C3%A1%20Isac!%20Tenho%20interesse%20no%20Plano%20Performance.",
  },
  {
    id: "elite",
    name: "Plano Elite",
    badge: "Mais Completo",
    description:
      "O plano mais completo, com avaliacao presencial em Sao Luis e acompanhamento premium.",
    benefits: [
      { text: "Avaliacao fisica presencial em Sao Luis" },
      { text: "Avaliacao online mensal" },
      { text: "Aplicativo exclusivo com videos demonstrativos" },
      { text: "Treino 100% personalizado com ajustes semanais" },
      { text: "Suporte prioritario via WhatsApp (07h as 22h)" },
      { text: "Grupo exclusivo no WhatsApp" },
      { text: "Chamada de video 2x por mes" },
      { text: "Relatorio de evolucao mensal" },
    ],
    flowSteps: [
      {
        step: "01",
        title: "Confirmacao do Pagamento",
        description: "Inicio imediato do acompanhamento",
      },
      {
        step: "02",
        title: "Envio da Anamnese Completa",
        description: "Questionario detalhado sobre historico e rotina",
      },
      {
        step: "03",
        title: "Avaliacao Presencial",
        description: "Composicao corporal, medidas e testes funcionais",
      },
      {
        step: "04",
        title: "Entrega do Treino em 24h",
        description: "Treino 100% personalizado e estruturado",
      },
      {
        step: "05",
        title: "Acompanhamento Continuo",
        description: "Monitoramento e ajustes estrategicos",
      },
      {
        step: "06",
        title: "Reavaliacao Online Mensal",
        description: "Fotos, medidas e feedback tecnico",
      },
      {
        step: "07",
        title: "Reavaliacao Presencial Bimestral",
        description: "Comparativo completo da evolucao fisica",
      },
    ],
    isPopular: true,
    ctaText: "Escolher Elite",
    ctaUrl:
      "https://wa.me/5598985891957?text=Ol%C3%A1%20Isac!%20Tenho%20interesse%20no%20Plano%20Elite.",
  },
]

// ---- Contato ----
export const CONTACT_DATA: ContactData = {
  title: "Pronto Para Comecar?",
  subtitle:
    "Entre em contato e de o primeiro passo rumo a sua transformacao. Estou pronto para te ajudar.",
  whatsappUrl:
    "https://wa.me/5598985891957?text=Ol%C3%A1%20Isac!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria.",
  instagramUrl: "https://instagram.com/isac.trainer",
  whatsappNumber: "(98) 98589-1957",
  instagramHandle: "@isac.trainer",
}

// ---- Footer ----
export const FOOTER_DATA: FooterData = {
  brandName: "Isac Fonseca",
  tagline: "Personal Trainer",
  copyright: `© ${new Date().getFullYear()} Isac Fonseca. Todos os direitos reservados.`,
  socialLinks: SOCIAL_LINKS,
}

// ---- Logo ----
export const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2011.53.37-YXEAIgr0lD9ooV18HgPhXMhB1XDvDx.jpeg"
