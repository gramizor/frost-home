import type { StaticImageData } from 'next/image'

export interface CarouselImage {
  src: StaticImageData | string
  alt: string
}

export type AccommodationSlug = 'chalet' | 'spa' | 'scandi'

export interface AccommodationDetailData {
  number: number
  title: string
  description: string
  images: CarouselImage[]
}

export interface AccommodationInfo {
  number: number
  slug: string
  title: string
  description: string
  priceWeekdays: string
  priceWeekends: string
  banners: string[]
  imageSrc: StaticImageData
  imageAlt: string
  conditions: ConditionsContent
}

export interface ConditionsSection {
  title: string
  items: readonly string[]
}

export interface ConditionsContent {
  sections: readonly ConditionsSection[]
}

export interface ConditionsViewProps {
  content: ConditionsContent
  className?: string
}
