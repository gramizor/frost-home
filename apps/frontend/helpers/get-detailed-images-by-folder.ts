import type { StaticImageData } from 'next/image'
import 'server-only'
import fs from 'node:fs'
import path from 'node:path'

export interface CarouselImage {
  src: StaticImageData | string
  alt: string
}

const readPublicImages = (folder: string): string[] => {
  const dir = path.join(process.cwd(), 'public', folder)
  let files: string[] = []
  try {
    files = fs.readdirSync(dir)
  } catch {
    return []
  }
  const out: string[] = []
  for (const name of files) {
    if (/\.(png|jpe?g|webp|avif)$/i.test(name)) {
      out.push(`/${folder}/${encodeURIComponent(name)}`)
    }
  }
  out.sort((a, b) => {
    const na = a.match(/(\d+)/)?.[1]
    const nb = b.match(/(\d+)/)?.[1]
    if (na && nb && na !== nb) {
      return parseInt(na, 10) - parseInt(nb, 10)
    }
    return a.localeCompare(b)
  })
  return out
}

interface SlugConfig {
  folder: 'chalet-details' | 'spa-details' | 'scandi-details'
}

const SLUGS: { chalet: SlugConfig; spa: SlugConfig; scandi: SlugConfig } = {
  chalet: { folder: 'chalet-details' },
  spa: { folder: 'spa-details' },
  scandi: { folder: 'scandi-details' }
}

const getImagesBySlug = (slug: 'chalet' | 'spa' | 'scandi'): CarouselImage[] => {
  const config = SLUGS[slug]
  const out: CarouselImage[] = []

  if (!config) {
    return out
  }

  const srcs: string[] = readPublicImages(config.folder)

  let i = 0
  for (const src of srcs) {
    const pretty = decodeURIComponent(src.split('/').pop() ?? '').replace(/\.\w+$/, '')
    out.push({ src, alt: pretty || `image ${i + 1}` })
    i += 1
  }

  return out
}

export const chaletImages: CarouselImage[] = getImagesBySlug('chalet')
export const spaImages: CarouselImage[] = getImagesBySlug('spa')
export const scandiImages: CarouselImage[] = getImagesBySlug('scandi')
