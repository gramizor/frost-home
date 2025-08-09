import './globals.css'
import { Header } from '@/components/header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="bg-background text-black">
        <Header />
        {children}
      </body>
    </html>
  )
}
