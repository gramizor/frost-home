import './globals.css'
import { Header } from '@/components/header'
import { cormorant, inter } from '@/app/fonts'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`min-h-dvh bg-background text-black ${cormorant.variable} ${inter.variable} relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
