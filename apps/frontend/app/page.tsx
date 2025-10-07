import { Hero } from '@/components/hero'
import heroImage from '@/public/hero.png'
import { MainPageBlocks, mainPageBlocksData } from '@/components/main-page/main-page-blocks'
import { JSX } from 'react'
import { ImageCarousel } from '@/components/images/image-carousel'
import firstSection from '@/public/first-section.png'
import secondSection from '@/public/second-section.png'
import thirdSection from '@/public/third-section.png'
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Frost Home' }
const Home = () => {
  const blocks: JSX.Element[] = []

  for (const section of mainPageBlocksData) {
    blocks.push(
      <MainPageBlocks
        key={section.title}
        title={section.title}
        subtitle={section.subtitle}
        imageSrc={section.imageSrc}
        imageAlt={section.imageAlt}
      />
    )
  }

  return (
    <main>
      <Hero backgroundSrc={heroImage.src} />
      <div className="flex h-screen items-center">
        <div className="mx-auto w-full text-center text-browny font-cormorant text-50 italic font-extralight border-y-4 border-accentRed py-[25px] px-[60px]">
          С этого момента Вы попадаете в другой мир,<br /> на мгновение отключившись от городской суеты и позабыв о всех повседневных делах.
        </div>
      </div>
      <div className="mx-auto mt-16 ">
        <ImageCarousel
          className="h-[690px]"
          images={[
            { src: firstSection, alt: 'Фото 1' },
            { src: secondSection, alt: 'Фото 2' },
            { src: thirdSection, alt: 'Фото 3' }
          ]}
        />
      </div>
      <div className="mx-auto space-y-[190px]">{blocks}</div>
    </main>
  )
}

export default Home
