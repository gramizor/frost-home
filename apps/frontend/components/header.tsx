'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

export interface NavItem {
  href: string
  label: string
}

export function Header() {
  const pathname = usePathname()

  const items: NavItem[] = [
    { href: '/', label: 'Усадьба Морозовых' },
    { href: '/rooms', label: 'Размещение' },
    { href: '/services', label: 'Услуги' },
    { href: '/activities', label: 'Чем заняться' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' }
  ]

  const links: React.ReactNode[] = []

  for (const item of items) {
    const isActive = pathname === item.href

    links.push(
      <li key={item.href} className="flex">
        <Link
          href={item.href}
          className={
            isActive
              ? 'rounded-full bg-btnActive px-6 py-3 text-primary transition'
              : 'rounded-full bg-headerDefault px-6 py-3 text-white transition hover:opacity-90'
          }
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="w-full">
          <ul className="flex items-center justify-between rounded-full bg-headerDefault px-2 py-2">
            {links}
          </ul>
        </nav>
      </div>
    </header>
  )
}
