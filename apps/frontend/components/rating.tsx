import React from 'react'
import { IconStar, IconStarFilled } from '@tabler/icons-react'

interface RatingProps {
  rating: number
  className?: string
}

export const Rating: React.FC<RatingProps> = ({ rating, className }) => {
  const filled = Math.max(0, Math.min(5, Math.floor(rating)))
  const color = '#F7DC61'

  return (
    <div className={className}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < filled) {
          return <IconStarFilled key={i} size={30} color={color} aria-label="star-filled" />
        }

        return <IconStar key={i} size={30} color={color} aria-label="star" />
      })}
    </div>
  )
}
