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
}

export const ImageCarousel = (props: CarouselProps): JSX.Element => {
  const { images, className } = props

  const [index, setIndex] = useState<number>(0)
  const length = images.length

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
  }, [next, prev])

  const startX = useRef<number | null>(null)

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
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
    <div
      className={`relative w-full overflow-hidden ${className ?? ''}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
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
    </div>
  )
}
