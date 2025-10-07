'use client'

import Image, { StaticImageData } from 'next/image'
import React, { JSX, useCallback, useEffect, useRef, useState } from 'react'

interface CarouselImage {
  src: StaticImageData | string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
  className?: string
  withThumbnail?: boolean
}

export const ImageCarousel = (props: CarouselProps): JSX.Element => {
  const { images, className, withThumbnail } = props

  const [index, setIndex] = useState<number>(0)
    const length: number = images.length
      const hasNav: boolean = length > 1
      const showThumbs: boolean = Boolean(withThumbnail) && hasNav

  const prev = useCallback((): void => {
    setIndex(i => {
      const target = i - 1
      if (target < 0) {
        return length - 1
      }
      return target
    })
  }, [length])

  const next = useCallback((): void => {
    setIndex(i => {
      const target = i + 1
      if (target >= length) {
        return 0
      }
      return target
    })
  }, [length])

  useEffect(() => {
    if (!hasNav) {
      return
    }
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowLeft') {
        prev()
      }
      if (e.key === 'ArrowRight') {
        next()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [next, prev, hasNav])

  const startX = useRef<number | null>(null)

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (!hasNav) {
      return
    }
    startX.current = e.clientX
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (startX.current === null) {
      return
    }
    const dx = e.clientX - startX.current
    startX.current = null
    if (dx > 40) {
      prev()
      return
    }
    if (dx < -40) {
      next()
      return
    }
  }

  const slides: JSX.Element[] = []
  for (let i = 0; i < length; i += 1) {
    const img = images[i]
    const isActive = i === index
    slides.push(
      <div
        key={`${img.alt}-${i}`}
        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image src={img.src} alt={img.alt} fill className="object-cover" priority={isActive} />
      </div>
    )
  }

  const dots: JSX.Element[] = []
  for (let i = 0; i < length; i += 1) {
    const isActive = i === index
    dots.push(
      <button
        key={`dot-${i}`}
        type="button"
        aria-label={`Показать слайд ${i + 1}`}
        onClick={() => {
          setIndex(i)
        }}
        className={`h-2 w-2 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'} hover:bg-white`}
      />
    )
  }

  return (
    <div className="relative">
      {showThumbs ? (
        <>
          <div
            className={`relative ${className ?? 'h-[560px]'}`}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {hasNav && <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={prev}
              className="rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>}

            <div className="relative h-full w-full overflow-hidden rounded-[16px] shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)]">
              {slides}
            </div>

            {hasNav && <button
              type="button"
              aria-label="Следующий слайд"
              onClick={next}
              className="rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>}
          </div>

          {hasNav && <div className="flex flex-wrap items-start content-start justify-center gap-[10px] mt-[30px] w-full mx-auto max-w-[min(100%,40rem)] self-start">
          {images.map((img, i) => {
              const isActive = i === index
              return (
                <button
                  key={`${img.alt}-${i}`}
                  type="button"
                  aria-label={`Показать слайд ${i + 1}`}
                  onClick={() => {
                    setIndex(i)
                  }}
                  className={`flex-none overflow-hidden rounded-[12px] shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] ring-2 ${isActive ? 'ring-primary' : 'ring-transparent'} hover:ring-primary/70`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={84}
                    height={84}
                    className="size-[68px] sm:size-[76px] md:size-[84px] object-cover"
                  />
                </button>
              )
            })}
          </div>}
        </>
      ) : (
        <div
          className={`relative w-full overflow-hidden ${className ?? 'h-[560px]'}`}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {!hasNav ? (
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" priority />
          ) : (
            <>
              {slides}
              <button
                type="button"
                aria-label="Предыдущий слайд"
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus:outline-none"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Следующий слайд"
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus:outline-none"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">{dots}</div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
