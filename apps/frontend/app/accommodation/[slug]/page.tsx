import { AccommodationDetailData, AccommodationSlug } from '@/app/accommodation/types'
import React, { JSX } from 'react'
import { chaletData, scandiData, spaData } from '@/app/accommodation/[slug]/slug-data'
import { ImageCarousel } from '@/components/images/image-carousel'
import { makeWAUrl } from '@/helpers/create-wa-url'

const DetailedHouse = async (props: {
  params: Promise<{ slug: AccommodationSlug }>
}): Promise<JSX.Element> => {
  const { slug } = await props.params

  let data: AccommodationDetailData
  if (!slug) {
    return <></>
  }

  switch (slug) {
    case 'chalet': {
      data = chaletData
      break
    }
    case 'spa': {
      data = spaData
      break
    }
    case 'scandi': {
      data = scandiData
      break
    }
    default: {
      return <></>
    }
  }

  return (
    <div className="grid grid-cols-2 gap-[40px] pt-[120px] pb-[50px] px-[50px] w-full min-w-0 max-w-full overflow-hidden">
      <div className="col-span-1 min-w-0">
        <ImageCarousel
          images={data.images}
          withThumbnail
          className="h-[600px] flex flex-row items-center justify-center gap-[18px]"
        />
      </div>
      <div className="col-span-1 min-w-0 flex flex-col gap-[40px]">
        <div className="flex flex-row gap-[25px] items-center">
          <div className="px-[20px] py-[5px] font-cormorant text-primary font-bold text-[50px] rounded-full ring-inset ring-2 ring-primary w-fit shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] bg-background">
            Дом {data.number}
          </div>
          <div className="font-cormorant text-primary font-bold text-48">{data.title}</div>
        </div>
        <a
          href={makeWAUrl(data.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-[30px] py-[15px] bg-primary shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] hover:shadow-[6px_8px_18px_0_rgба(0,0,0,0.30)] hover:bg-primaryHover active:shadow-[2px_3px_6px_0_rgба(0,0,0,0.25)] transition-[box-shadow,background-color,transform] duration-300 ease-in-out text-28 font-cormorant rounded-[5px] text-cardWhite font-semibold text-nowrap h-fit w-fit"
        >
          Забронировать дом
        </a>
        <span className="font-cormorant text-22 text-browny whitespace-pre-line break-words hyphens-auto max-w-full">
          {data.description}
        </span>
      </div>
    </div>
  )
}

export default DetailedHouse
