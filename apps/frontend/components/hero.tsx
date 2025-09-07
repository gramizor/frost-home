// src/components/hero.tsx
import Image from 'next/image'
import arrowRight from '@/public/arrow-right.svg'

interface HeroProps {
  backgroundSrc: string
}

export function Hero({ backgroundSrc }: HeroProps) {
  return (
    <section className="relative h-screen max-h-screen overflow-hidden">
      {/* Фон */}
      <Image
        src={backgroundSrc}
        alt="Frost Home"
        fill
        priority
        className="object-cover object-bottom"
      />
      {/* Контент */}
      <div
        className="relative flex h-full flex-col items-center text-center px-4 text-accentRed w-fit mx-auto"
        style={{ marginTop: 'calc(50vh - 200px)' }}
      >
        <h1
          className="font-cormorant text-[128px] tracking-wide underline underline-offset-8 decoration-4"
          style={{ textShadow: '3px 0px 3px rgba(0, 0, 0, 0.25)' }}
        >
          FROST HOME
        </h1>
        <p className="text-[40px] font-cormorant -mt-12">Уникальные дома в Усадьбе Морозовых</p>
      </div>
      <a
        href="https://wa.me/79169074447?text=Здравствуйте,%20хочу%20забронировать%20номер"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 h-100 bg-[#937878] flex items-center justify-center text-white text-[40px] hover:bg-[#886F6F] select-none cursor-pointer"
      >
        <span className="font-cormorant">Забронировать дом</span>
        <Image src={arrowRight} alt="arrow right" />
      </a>
    </section>
  )
}
