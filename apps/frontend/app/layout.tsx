// app/layout.tsx
import './globals.css'
import { Header } from '@/components/header'
import { cormorant, inter } from '@/app/fonts'

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
