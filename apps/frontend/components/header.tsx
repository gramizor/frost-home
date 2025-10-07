'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import clsx from 'clsx'

export interface NavItem {
  href: string
  label: string
}

export const Header: React.FC = () => {
  const pathname: string = usePathname()
  const [open, setOpen] = React.useState<boolean>(false)
  const [showContent, setShowContent] = React.useState<boolean>(false)
  const panelRef: React.MutableRefObject<HTMLDivElement | null> =
    React.useRef<HTMLDivElement | null>(null)
  const buttonRef: React.MutableRefObject<HTMLButtonElement | null> =
    React.useRef<HTMLButtonElement | null>(null)

  const items: NavItem[] = [
    { href: '/', label: 'Frost Home' },
    { href: '/accommodation', label: 'Наши дома' },
    { href: '/services', label: 'Услуги' },
    { href: '/neighbourhood', label: 'Окрестности' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' }
  ]

  const desktopLinks: React.ReactNode[] = []

  for (const item of items) {
    const isActive: boolean = pathname === item.href

    desktopLinks.push(
      <li key={item.href} className="flex flex-1 w-full">
        <Link
          href={item.href}
          className={clsx(
            'flex w-full justify-center text-center rounded-full text-white font-cormorant cursor-pointer text-24 whitespace-nowrap p-[7px] hover:bg-headerBtnHover transition-[transform,box-shadow,background-color,outline] duration-300 ease-out will-change-transform active:translate-y-[1px] active:scale-[0.9] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8B8C52]/40',
            isActive &&
              'bg-headerBtnActive shadow-[3px_4px_8px_rgba(0,0,0,0.25)] hover:shadow-none outline outline-1 outline-[#8B8C52]/40 hover:outline-none'
          )}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  React.useEffect((): (() => void) => {
    let t: number | undefined
    if (open) {
      t = window.setTimeout((): void => {
        setShowContent(true)
      }, 120) // дожидаемся расширения
    } else {
      setShowContent(false) // прячем контент перед схлопыванием
    }
    return (): void => {
      if (t) {
        window.clearTimeout(t)
      }
    }
  }, [open])

  React.useEffect((): (() => void) => {
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    const onPointerDown = (e: MouseEvent): void => {
      const target: Node | null = e.target as Node | null

      if (!open) {
        return
      }

      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('mousedown', onPointerDown)

    return (): void => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  return (
    <header className="fixed left-0 right-0 top-[30px] z-50 mx-[20px] sm:mx-[40px] md:mx-[65px]">
      <div className="mx-auto max-w-6xl">
        {/* Desktop / Tablet ≥ md */}
        <nav className="hidden md:block w-full">
          <ul className="flex items-center justify-between rounded-full bg-headerBg shadow-[0_6px_15px_rgba(0,0,0,0.25)] p-[5px] gap-[5px]">
            {desktopLinks}
          </ul>
        </nav>

        {/* Mobile < md: “растекающаяся” кнопка */}
        <div className="md:hidden relative h-[0]">
          {/* Базовая круглая кнопка. При open она превращается в широкую панель */}
          <button
            ref={buttonRef}
            type="button"
            onClick={(): void => {
              if (!open) {
                setOpen(true)
              }
            }}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            className={clsx(
              'absolute right-0 -top-[12px] z-[55] overflow-hidden',
              // Геометрия и фон. Меняем width/height/padding/border-radius с анимацией
              'transition-[width,height,border-radius,padding,background-color,box-shadow] duration-300 ease-out will-change-[width,height,border-radius] bg-headerBg',
              open
                ? 'left-0 right-0 w-full h-auto px-10 py-10 rounded-[24px] overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.35)]'
                : 'w-[50px] h-[50px] rounded-full shadow-[0_6px_15px_rgba(0,0,0,0.25)]'
            )}
          >
            {/* Когда open=false — показываем “кружок”. Когда open=true — внутри появится меню. */}
            {!open && (
              <div className="pointer-events-none absolute inset-0 grid place-items-center transition-opacity duration-200">
                <div className="flex flex-col gap-[4px]">
                  <span className="block h-[2px] w-13 bg-white rounded" />
                  <span className="block h-[2px] w-13 bg-white rounded" />
                  <span className="block h-[2px] w-13 bg-white rounded" />
                </div>
              </div>
            )}
            {open && (
              <div
                ref={panelRef}
                id="mobile-nav-panel"
                role="menu"
                aria-label="Основная навигация"
                // Плавное проявление контента после расширения капсулы
                className={clsx(
                  'transition-all duration-200 ease-out opacity-0 -translate-y-[4px]',
                  showContent && 'opacity-100 translate-y-0'
                )}
              >
                <ul className="flex flex-col gap-1">
                  {items.map((item: NavItem): React.ReactNode => {
                    const isActive: boolean = pathname === item.href

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={(): void => {
                            setOpen(false)
                          }}
                          role="menuitem"
                          className={clsx(
                            'block -mx-4 px-6 py-2 text-center font-cormorant text-[18px] text-white rounded-[24px]',
                            'transition-[transform,background-color,outline] duration-200 ease-out active:translate-y-[1px] active:scale-[0.98]',
                            isActive
                              ? 'bg-headerBtnActive outline outline-1 outline-[#8B8C52]/40 shadow-sm'
                              : 'hover:bg-headerBtnHover'
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* keyframes для мягкого появления контента внутри растёкшейся кнопки */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
