import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Isac Fonseca | Personal Trainer - Consultoria Online",
  description:
    "Consultoria online personalizada para hipertrofia e emagrecimento. Metodo Intensi com ciencia e estrategia para resultados reais. Formado pela UFMA com 6+ anos de experiencia.",
  keywords: [
    "personal trainer",
    "consultoria online",
    "hipertrofia",
    "emagrecimento",
    "treino personalizado",
    "Sao Luis",
    "Maranhao",
    "Isac Fonseca",
    "Metodo Intensi",
  ],
  openGraph: {
    title: "Isac Fonseca | Personal Trainer",
    description:
      "Transforme seu corpo com consultoria online personalizada. Ciencia + Estrategia + Resultados.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
