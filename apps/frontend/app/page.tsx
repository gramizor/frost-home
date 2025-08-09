import { Hero } from '@/components/Hero'
import heroImage from '@/public/hero.png'
import { SectionMain, sectionsData } from '@/components/main-page/section-main'
import { JSX } from 'react'

export default function Home() {
  const blocks: JSX.Element[] = []

  for (const section of sectionsData) {
    blocks.push(
      <SectionMain
        key={section.title}
        title={section.title}
        subtitle={section.subtitle}
        imageSrc={section.imageSrc}
        imageAlt={section.imageAlt}
      />
    )
  }

  return (
    <>
      <Hero backgroundSrc={heroImage.src} />
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-[190px]">{blocks}</div>
    </>
  )
}
