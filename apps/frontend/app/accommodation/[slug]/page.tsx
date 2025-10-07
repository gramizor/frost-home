import type { JSX } from 'react'
import type { Metadata } from 'next'
import { IconArrowBackUp } from '@tabler/icons-react'
import { ImageCarousel } from '@/components/images/image-carousel'
import { makeWAUrl } from '@/helpers/create-wa-url'
import { chaletData, scandiData, spaData } from './slug-data'
import type { AccommodationDetailData, AccommodationSlug } from '@/app/accommodation/types'
import Link from 'next/link'

interface SlugTitleMap {
  [key: string]: string
}

const TITLES: SlugTitleMap = {
  chalet: 'Chalet-дом',
  spa: 'SPA-дом',
  scandi: 'Scandi-дом'
}

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const title: string = TITLES[slug] ?? 'Дом'
  return { title }
}

interface SlugPageProps {
  params: Promise<{ slug: AccommodationSlug }>
}

const DetailedHouse = async ({ params }: SlugPageProps): Promise<JSX.Element> => {
  const { slug } = await params

  let data: AccommodationDetailData

  if (slug === 'chalet') {
    data = chaletData
  } else if (slug === 'spa') {
    data = spaData
  } else if (slug === 'scandi') {
    data = scandiData
  } else {
    return <></>
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:pt-[120px] pb-[40px] md:pb-[50px] px-4 sm:px-6 p-[30px] w-full min-w-0 max-w-full overflow-hidden">
      <div className="col-span-1 min-w-0 px-10">
        <Link
          href="/accommodation"
          className="flex items-center text-22 text-primary underline ml-[50px] mb-[20px]"
        >
          <IconArrowBackUp /> Вернуться ко всем домам
        </Link>

        <ImageCarousel
          images={data.images}
          withThumbnail
          className="h-[260px] sm:h-[360px] md:h-[480px] lg:h-[600px] flex flex-row items-center justify-center gap-[18px]"
        />
      </div>

      <div className="col-span-1 min-w-0 flex flex-col gap-[28px] md:gap-[40px] md:p-0 p-[30px]">
        <div className="flex flex-row gap-[25px] items-center">
          <div className="font-cormorant text-primary font-bold text-48">{data.title}</div>
        </div>

        <Link
          href={makeWAUrl(data.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-[30px] py-[15px] bg-primary shadow-[3px_4px_8px_0_rgba(0,0,0,0.25)] hover:shadow-[6px_8px_18px_0_rgba(0,0,0,0.30)] hover:bg-primaryHover active:shadow-[2px_3px_6px_0_rgba(0,0,0,0.25)] transition-[box-shadow,background-color,transform] duration-300 ease-in-out text-28 font-cormorant rounded-[5px] text-cardWhite font-semibold text-nowrap h-fit w-fit"
        >
          Забронировать дом
        </Link>

        <span className="font-cormorant text-22 text-browny whitespace-pre-line break-words hyphens-auto max-w-full">
          {data.description}
        </span>
      </div>
    </main>
  )
}

export default DetailedHouse
