// app/layout.tsx
import './globals.css'
import { Header } from '@/components/header'
import { cormorant, inter } from '@/app/fonts'
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    default: 'Frost Home',
    template: '%s — Frost Home'
  },
  description: 'Уникальные дома в усадьбе Морозовых',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.className} ${inter.variable}`}>
      <body className="min-h-dvh bg-background text-black relative">
        <Header />
        {children}
      </body>
    </html>
  )
}
