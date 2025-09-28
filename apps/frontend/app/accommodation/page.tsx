'use client'

import Image from 'next/image'
import React, { JSX } from 'react'
import { accommodationData } from '@/app/accommodation/mock-data'
import { ConditionsView } from '@/app/accommodation/conditions-components'
import { Popover, PopoverButton, PopoverPanel, Portal } from '@headlessui/react'
import Link from 'next/link'
import { makeWAUrl } from '@/helpers/create-wa-url'

interface PageLockProps {
  active: boolean
}

const PageLock = ({ active }: PageLockProps): JSX.Element | null => {
  React.useEffect((): (() => void) | void => {
    if (!active) {
      return
    }

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const app = document.getElementById('__next')
    if (app) {
      app.setAttribute('inert', '')
      app.setAttribute('aria-hidden', 'true')
    }

    return (): void => {
      document.body.style.overflow = prev
      if (app) {
        app.removeAttribute('inert')
        app.removeAttribute('aria-hidden')
      }
    }
  }, [active])

  return null
}

const AccommodationPage = (): JSX.Element => {
  const sections: JSX.Element[] = accommodationData.map((item): JSX.Element => {
    const chips: JSX.Element[] = item.banners.map((text): JSX.Element => {
      return (
        <div
          key={`${item.number}-${text}`}
          className="bg-background text-primary font-cormorant font-bold text-24 px-[15px] py-[15px] rounded-full ring-inset ring-2 ring-primary shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)]"
        >
          {text}
        </div>
      )
    })

    return (
      <section
        key={item.number}
        className="flex flex-row items-stretch shadow-[16px_0_28px_-12px_rgba(0,0,0,0.25)] rounded-[20px]"
      >
        <div className="relative w-[494px] min-h-[720px] self-stretch overflow-hidden rounded-[20px_0_0_20px] shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)]">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
            sizes="494px"
          />
        </div>

        <div className="flex flex-col flex-1 bg-cardWhite w-full rounded-[0_20px_20px_0] px-[30px] py-[30px] gap-[15px]">
          <div className="flex flex-row flex-wrap gap-[25px]">{chips}</div>

          <div className="flex flex-row gap-[25px] items-center">
            <div className="px-[20px] py-[5px] font-cormorant text-primary font-bold text-50 rounded-full ring-inset ring-2 ring-primary w-fit shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] bg-cardWhite">
              Дом {item.number}
            </div>
            <div className="font-cormorant text-primary font-bold text-50">{item.title}</div>
          </div>

          <p className="whitespace-pre-line text-browny/90 my-auto text-28 font-normal font-cormorant">
            {item.description}
          </p>

          <div className="text-primary text-36 font-cormorant font-semibold">
            <div>ПН-ЧТ {item.priceWeekdays}</div>
            <div>ПТ-ВС {item.priceWeekends}</div>
          </div>

          <Popover>
            {({ open, close }: { open: boolean; close: () => void }): JSX.Element => {
              return (
                <>
                  <PageLock active={open} />

                  <PopoverButton className="underline w-fit text-browny font-cormorant text-24 focus:outline-none">
                    Дополнительные условия
                  </PopoverButton>

                  <Portal>
                    {open ? (
                      <div
                        className="fixed inset-0 z-[999] bg-white/40 backdrop-blur-[1px]"
                        onClick={(): void => {
                          close()
                        }}
                      />
                    ) : null}

                    <PopoverPanel
                      anchor="top"
                      className="z-[1000] relative max-w-[720px] w-[min(720px,calc(100vw-32px))] bg-background rounded-[30px] ring-inset ring-2 ring-primary shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-[24px] [--anchor-gap:12px]"
                    >
                      <button
                        className="absolute right-[12px] top-[12px] text-primary text-28 leading-none"
                        onClick={(): void => {
                          close()
                        }}
                        aria-label="Закрыть"
                      >
                        ×
                      </button>

                      <ConditionsView content={item.conditions} />
                    </PopoverPanel>
                  </Portal>
                </>
              )
            }}
          </Popover>

          <div className="flex flex-row gap-[15px]">
            <Link
              href={`/accommodation/${item.slug}`}
              className="flex items-center justify-center px-[30px] py-[15px] bg-cardWhite shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] hover:shadow-[6px_8px_18px_0_rgba(0,0,0,0.30)] hover:bg-cardWhiteHover active:shadow-[2px_3px_6px_0_rgба(0,0,0,0.25)] transition-[box-shadow,background-color,transform] duration-300 ease-in-out text-28 font-cormorant rounded-[5px] ring-inset ring-2 ring-primary text-primary font-semibold text-nowrap h-fit"
            >
              Подробнее о доме
            </Link>
            <a
              href={makeWAUrl(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-[30px] py-[15px] bg-primary shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] hover:shadow-[6px_8px_18px_0_rgба(0,0,0,0.30)] hover:bg-primaryHover active:shadow-[2px_3px_6px_0_rgба(0,0,0,0.25)] transition-[box-shadow,background-color,transform] duration-300 ease-in-out text-28 font-cormorant rounded-[5px] text-cardWhite font-semibold text-nowrap h-fit w-fit"
            >
              Забронировать дом
            </a>
          </div>
        </div>
      </section>
    )
  })

  return <div className="flex flex-col my-[120px] mx-[30px] gap-[120px]">{sections}</div>
}

export default AccommodationPage
