import { ImageCarousel } from '@/components/images/image-carousel'
import { StaticImageData } from 'next/image'

interface InfoCardProps {
  data: InfoCardDataType
}

export interface InfoCardDataType {
  title: string
  additionalData: string | string[]
  description: string
  price?: string | string[]
  variant: 'small' | 'large'
  images: { src: StaticImageData; alt: string }[]
}

export const InfoCard = ({ data }: InfoCardProps) => {
  return (
    <div
      className={`grid ${data.variant === 'large' ? 'grid-cols-1 md:grid-cols-[minmax(320px,650px)_minmax(0,750px)] max-w-[1420px] w-full ' : 'grid-cols-1 w-[400px]'} rounded-20 bg-cardWhite h-full`}
    >
      <div className={`relative ${data.variant === 'small' ? 'rounded-t-20 overflow-hidden' : ''}`}>
        <ImageCarousel
          images={data.images}
          className={`h-[400px] shadow-sm ${data.variant === 'large' ? 'rounded-l-20' : 'rounded-t-20 rounded-b-0'}`}
        />
        {data.variant === 'small' ? (
          <div className="absolute left-6 top-6 flex flex-wrap gap-2">
            {Array.isArray(data.additionalData) ? (
              data.additionalData.map((tag, i) => {
                return (
                  <span
                    key={`${tag}-${i}`}
                    className="w-fit h-fit rounded-15 bg-cardWhite px-10 py-5 text-22 text-primary ring-inset ring-2 ring-background shadow-xs"
                  >
                    {tag}
                  </span>
                )
              })
            ) : (
              <span className="w-fit rounded-15 bg-cardWhite px-10 py-5 text-22 text-primary ring-inset ring-2 ring-background shadow-xs">
                {data.additionalData}
              </span>
            )}
          </div>
        ) : null}
      </div>
      <div className="relative flex flex-col gap-6 p-25 pl-35 flex-1 justify-between h-full min-h-[400px]">
        <div className="flex justify-between items-center">
          <h3 className="text-48 font-bold text-primary">{data.title}</h3>

          {data.variant === 'large' ? (
            Array.isArray(data.additionalData) ? (
              <div className="flex flex-wrap gap-20 items-center">
                {data.additionalData.map((tag, i) => {
                  return (
                    <span
                      key={`${tag}-${i}`}
                      className="w-fit h-fit rounded-15 bg-cardWhite px-10 py-5 text-22 text-primary ring-inset ring-2 ring-background shadow-xs"
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            ) : (
              <span className="w-fit rounded-15 bg-cardWhite px-10 py-5 text-22 text-primary ring-inset ring-2 ring-background shadow-xs">
                {data.additionalData}
              </span>
            )
          ) : null}
        </div>

        <p className="whitespace-pre-line text-22 leading-[1.6] text-[#4A3E37]">
          {data.description}
        </p>

        <div className="pt-4">
          {Array.isArray(data.price) ? (
            <div className="flex flex-col gap-1 text-32 text-primary font-semibold">
              {data.price.map((p, i) => {
                return <span key={`price-${i}`}>{p}</span>
              })}
            </div>
          ) : (
            <span className="text-32 text-primary font-semibold">{data.price}</span>
          )}
        </div>
      </div>
    </div>
  )
}
