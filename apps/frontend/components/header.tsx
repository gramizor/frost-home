'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import clsx from 'clsx'

export interface NavItem {
  href: string
  label: string
}

export const Header = () => {
  const pathname = usePathname()

  const items: NavItem[] = [
    { href: '/', label: 'Усадьба Морозовых' },
    { href: '/accommodation', label: 'Размещение' },
    { href: '/services', label: 'Услуги' },
    { href: '/neighbourhood', label: 'Окрестности' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' }
  ]

  const links: React.ReactNode[] = []

  for (const item of items) {
    const isActive = pathname === item.href

    links.push(
      <li key={item.href} className="flex flex-1 w-full">
        <Link
          href={item.href}
          className={clsx(
            'flex w-full justify-center text-center rounded-full text-white font-cormorant cursor-pointer text-24 whitespace-nowrap p-[7px] hover:bg-headerBtnHover transition-[transform,box-shadow,background-color,outline] duration-300 ease-out will-change-transform active:translate-y-[1px] active:scale-[0.9] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8B8C52]/40',
            isActive &&
              'bg-headerBtnActive shadow-[3px_4px_8px_rgba(0,0,0,0.25)] hover:shadow-none outline outline-1 outline-[#8B8C52]/40 hover:outline-none'
          )}
          // TODO: сделать прессед эффект
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <header className="fixed left-0 right-0 top-[30px] z-50 mx-[65px]">
      <div className="mx-auto max-w-6xl">
        <nav className="w-full">
          <ul className="flex items-center justify-between rounded-full bg-headerBg shadow-[0_6px_15px_rgba(0,0,0,0.25)] p-[5px] gap-[5px]">
            {links}
          </ul>
        </nav>
      </div>
    </header>
  )
}
