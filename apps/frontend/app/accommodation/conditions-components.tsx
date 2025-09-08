'use client'

import React, { JSX } from 'react'
import { ConditionsViewProps } from '@/app/accommodation/types'

export const ConditionsView = ({
  content,
  className = 'font-cormorant text-browny text-[24px] leading-[1.25]'
}: ConditionsViewProps): JSX.Element => {
  const blocks: JSX.Element[] = content.sections.map((section, sectionIndex): JSX.Element => {
    const lis: JSX.Element[] = section.items.map((text, itemIndex): JSX.Element => {
      return <li key={`cond-item-${sectionIndex}-${itemIndex}`}>{text}</li>
    })

    return (
      <div key={`cond-sec-${sectionIndex}`} className="mb-[12px]">
        <div className="font-semibold">{section.title}</div>
        <ul className="list-disc pl-5">{lis}</ul>
      </div>
    )
  })

  return <div className={className}>{blocks}</div>
}
