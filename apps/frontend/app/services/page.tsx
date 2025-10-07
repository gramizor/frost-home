import { servicesData } from '@/app/services/mock-data'
import { InfoCard, InfoCardDataType } from '@/components/info-card'
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Услуги' }
const ServicesPage = () => {
  return (
    <main className="pt-[120px] px-[65px] pb-[30px] w-full flex flex-col gap-[70px]">
      <span className="text-60 text-browny text-center">
        Особые впечатления, которые сделают отдых незабываемым
      </span>
      <div className="flex flex-row flex-wrap gap-[70px] items-stretch justify-center">
        {servicesData
          .filter((s: InfoCardDataType) => {
            return s.variant === 'large'
          })
          .map((s: InfoCardDataType) => {
            return <InfoCard data={s} key={s.title} />
          })}
      </div>

      <span className="text-60 text-browny text-center">
        Маленькие радости, которые дополняют Ваш отдых
      </span>
      <div className="gap-[70px] flex flex-row flex-wrap items-stretch justify-center">
        {servicesData
          .filter((s: InfoCardDataType) => {
            return s.variant === 'small'
          })
          .map((s: InfoCardDataType) => {
            return <InfoCard data={s} key={s.title} />
          })}
      </div>
    </main>
  )
}

export default ServicesPage
