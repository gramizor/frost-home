// src/components/Hero.tsx
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
        className="relative flex h-full flex-col items-center text-center px-4 text-darkRed w-fit mx-auto"
        style={{ marginTop: 'calc(50vh - 200px)' }}
      >
        <h1
          className="font-cormorant text-8xl tracking-wide "
          style={{ textShadow: '3px 0px 3px rgba(0, 0, 0, 0.25)' }}
        >
          FROST HOME
        </h1>
        <div className="h-px w-full border border-darkRed my-1" />
        <p className="text-[24px] font-cormorant">Загородный отель в Усадьбе Морозовых</p>
      </div>
      <a
        href="https://wa.me/79169074447?text=Здравствуйте,%20хочу%20забронировать%20номер"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 h-100 bg-softPink flex items-center justify-center text-white text-2xl hover:bg-softPinkHover select-none cursor-pointer"
      >
        <span className="font-cormorant font-medium">Забронировать номер</span>
        <Image src={arrowRight} alt="arrow right" />
      </a>
    </section>
  )
}
