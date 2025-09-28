import { Hero } from '@/components/hero'
import heroImage from '@/public/hero.png'
import { MainPageBlocks, mainPageBlocksData } from '@/components/main-page/main-page-blocks'
import { JSX } from 'react'
import { ImageCarousel } from '@/components/images/image-carousel'
import firstSection from '@/public/first-section.png'
import secondSection from '@/public/second-section.png'
import thirdSection from '@/public/third-section.png'

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
    <>
      <Hero backgroundSrc={heroImage.src} />
      <div className="flex h-screen items-center">
        <div className="mx-[120px] w-full text-center text-browny font-cormorant text-50 italic font-extralight border-y-4 border-accentRed py-[25px] px-[60px]">
          Путешествуя по всему миру, мы по частицам собрали все, что нам нравилось. Вы можете
          прочувствовать эстетику северной Европы в архитектуре и ландшафтном дизайне, на мгновение
          отключившись от городской суеты и позабыв о всех повседневных делах.
          <br />С этого момента вы попадаете в другой мир.
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
    </>
  )
}

export default Home
