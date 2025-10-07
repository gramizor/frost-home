import { IconBrandWhatsapp, IconPhone, IconSend } from '@tabler/icons-react'
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Контакты' }

const ContactsPage = () => {
  const tel: string = '+7 916 907-44-47'
  const telHref: string = '+79169074447'
  const routeUrl: string = 'https://yandex.ru/maps/-/CLuCm2LA'
  const yandexMapSrc: string = 'https://yandex.ru/map-widget/v1/-/CLuCm2LA'

  return (
    <div className="flex flex-col items-center px-[65px] pt-[125px] pb-[80px]">
      <span className="text-center text-browny text-60 pb-[55px]">
        Ваш идеальный отдых - всего в одном звонке
      </span>

      <div className="w-full bg-cardWhite rounded-15 p-25 shadow-sm grid grid-cols-1 xl:grid-cols-[1fr_650px] gap-20">
        <div className="flex flex-col gap-6 h-full xl:min-h-[400px]">
          <div className="text-browny text-32 whitespace-pre-line font-light">
            <span className="font-bold text-primary">Адрес:</span>{' '}
            {
              'Московская обл., Волоколамский г.о.,\nд. Большое Стромилово,\nОльховая ул., 2 (зона парковки)'
            }
            {'\n'}
            <span className="font-bold text-primary">Координаты:</span> {'56.169809, 36.084516'}
          </div>

          <a href={`tel:${telHref}`} className="text-48 font-semibold text-browny">
            {tel}
          </a>

          <div className="flex items-center gap-4 mt-auto">
            <a
              href={`tel:${telHref}`}
              className="rounded-[25px] border-[2px] text-browny border-primary flex items-center justify-center hover:shadow"
            >
              <IconPhone size={60} className="p-8" />
            </a>
            <a
              href={`https://wa.me/${telHref}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-[25px] border-[2px] text-browny border-primary flex items-center justify-center hover:shadow"
            >
              <IconBrandWhatsapp size={60} className="p-8" />
            </a>
            <a
              href="https://t.me/frosthomeee"
              target="_blank"
              rel="noreferrer"
              className="rounded-[25px] border-[2px] text-browny border-primary flex items-center justify-center hover:shadow"
            >
              <IconSend size={60} className="p-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <iframe
            src={yandexMapSrc}
            title="Карта проезда"
            loading="lazy"
            className="w-full aspect-[650/400] rounded-15 shadow-sm"
            style={{ border: 0 }}
            allowFullScreen
          />
          <a
            href={routeUrl}
            target="_blank"
            rel="noreferrer"
            className="self-end underline underline-offset-4 font-serif text-32 text-browny"
          >
            Проложить маршрут ↗
          </a>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 text-32 text-browny font-light">
        <div className="bg-cardWhite rounded-15 p-20 shadow-sm">
          <div className="text-primary font-bold mb-3">Своим ходом:</div>
          <div className="whitespace-pre-line">
            {
              'От Москвы — на электричке с Рижского вокзала до станции Чисмена (≈2 ч).\nДалее — на такси до д. Большое Стромилово (Ольховая ул., дом 2) или автобусе до остановки Теряево-1 (≈30 мин)'
            }
          </div>
        </div>
        <div className="bg-cardWhite rounded-15 p-20 shadow-sm">
          <div className="text-primary font-bold mb-3">На автомобиле:</div>
          <div className="whitespace-pre-line">
            {
              'По трассе М9 (Новая Рига) до дер. Большое Стромилово, Ольховая ул., дом 2 (Волоколамский г.о., МО).\nРасстояние от Москвы: ≈100 км.\nВремя в пути: от МКАД ≈1 ч\nиз центра ≈1 ч 30 мин.'
            }
          </div>
        </div>
      </div>

      <div className="w-full bg-cardWhite rounded-15 p-20 shadow-sm mt-20">
        <div className="text-primary text-32 font-bold mb-3">
          Ближайшие магазины, доставка продуктов:
        </div>
        <div className="text-browny text-32 whitespace-pre-line font-light">
          {
            'В 5 минутах езды от дома есть большой магазин Пятерочка, Магнит, Дикси.\nК нам доставляют: ВкусВилл, Озон, Яндекс доставка из ближайших ресторанов (суши, роллы, пицца).'
          }
        </div>
      </div>

      <span className="text-browny text-60 mt-[80px]">Ждём Вас в гости!</span>
    </div>
  )
}

export default ContactsPage
