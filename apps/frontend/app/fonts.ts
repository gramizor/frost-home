import { Cormorant_Garamond, Inter } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
})

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter'
})
