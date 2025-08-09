import * as React from 'react'

export interface SectionProps {
  title: string
  children?: React.ReactNode
}

export const Section = (props: SectionProps) => {
  if (!props.title) {
    return null
  }

  return (
    <section className="space-y-2 py-6">
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <div>{props.children}</div>
    </section>
  )
}
