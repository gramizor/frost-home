import { InfoCard, InfoCardDataType } from '@/components/info-card'
import cheese from '@/public/neighbourhood/cheese.png'
import deerFarm from '@/public/neighbourhood/deer-farm.png'
import equestrianClub from '@/public/neighbourhood/equestrian-club.png'
import fermupark from '@/public/neighbourhood/fermupark.png'
import goncharovEstate from '@/public/neighbourhood/goncharov-estate.png'
import iosifoVolotsky from '@/public/neighbourhood/iosifo-volotsky.png'
import raceway from '@/public/neighbourhood/raceway.png'
import volokolamskKremlin from '@/public/neighbourhood/volokolamsk-kremlin.png'
import yaropoletskaya from '@/public/neighbourhood/yaropoletskaya-hpp.png'
import {Metadata} from "next";

const neighbourhoodData: InfoCardDataType[] = [
  {
    title: 'Иосифо-Волоцкий монастырь',
    additionalData: ['250 м', '10 мин пешком'],
    description:
      'Жемчужина русской духовной архитектуры XV века. Величественное место с белокаменными стенами, древними храмами и росписями. Прогулка по монастырскому двору переносит в эпоху великих событий русской истории.',
    variant: 'large',
    images: [{ src: iosifoVolotsky, alt: 'Иосифо-Волоцкий монастырь' }]
  },
  {
    title: 'Ярополецкая ГЭС',
    additionalData: ['22,1 км', '24 мин на авто'],
    description:
      'Уникальный памятник инженерного искусства XX века и один из старейших гидроузлов Подмосковья. Прогулки вдоль плотины, виды на Ламу и умиротворяющая атмосфера у воды.',
    variant: 'large',
    images: [{ src: yaropoletskaya, alt: 'Ярополецкая ГЭС' }]
  },
  {
    title: 'Усадьба Гончаровых',
    additionalData: ['21,9 км', '23 мин на авто'],
    description:
      'Изящный архитектурный комплекс XIX века, связанный с историей семьи Натальи Гончаровой. Парк с вековыми деревьями, интерьеры и тихие аллеи для неспешных прогулок и погружения в историю.',
    variant: 'large',
    images: [{ src: goncharovEstate, alt: 'Усадьба Гончаровых' }]
  },
  {
    title: 'Оленья ферма',
    additionalData: ['33 км', '30 мин на авто'],
    description:
      'Уютный уголок живой природы: благородные олени вблизи, кормление с рук и спокойная атмосфера для семейных прогулок и романтического отдыха.',
    variant: 'large',
    images: [{ src: deerFarm, alt: 'Оленья ферма' }]
  },
  {
    title: 'Гоночная трасса Moscow Raceway',
    additionalData: ['32 км', '32 мин на авто'],
    description:
      'Современный автоспортивный комплекс международного уровня: соревнования, трек-дни и возможность почувствовать драйв скорости на трибунах.',
    variant: 'large',
    images: [{ src: raceway, alt: 'Moscow Raceway' }]
  },
  {
    title: 'Конный клуб «Свобода Лошадей»',
    additionalData: ['4 км', '10 мин на авто'],
    description:
      'Занятия верховой ездой в спокойной атмосфере. Акцент на гармонии наездника и лошади, знакомство с характерами и особенностями животных.',
    variant: 'large',
    images: [{ src: equestrianClub, alt: 'Конный клуб «Свобода Лошадей»' }]
  },
  {
    title: 'Волоколамский Кремль',
    additionalData: ['26 км', '29 мин на авто'],
    description:
      'Древний архитектурный ансамбль — историческое сердце города. Музеи, колокольня с панорамой окрестностей и память о многих веках истории.',
    variant: 'large',
    images: [{ src: volokolamskKremlin, alt: 'Волоколамский Кремль' }]
  },
  {
    title: 'ФЕРМУПАРК',
    additionalData: ['20,4 км', '20 мин на авто'],
    description:
      'Просторная ферма с общением с животными и продукцией собственного производства: молочные продукты, сыры, яйца, мёд и овощи.',
    variant: 'large',
    images: [{ src: fermupark, alt: 'ФЕРМУПАРК' }]
  },
  {
    title: 'Сыроварня Хрестиных',
    additionalData: ['3,3 км', '8 мин на авто'],
    description:
      'Семейная сыроварня с натуральными сырами по авторским рецептам. Экскурсии в ремесленное производство и дегустации.',
    variant: 'large',
    images: [{ src: cheese, alt: 'Сыроварня Хрестиных' }]
  }
]

export const metadata: Metadata = { title: 'Окрестности' }
const NeighbourhoodPage = () => {
  return (
    <main className="pt-[120px] px-[65px] pb-[30px] w-full flex flex-col gap-[70px]">
      <span className="text-60 text-browny text-center">
        Мы собрали для Вас интересные локации, которые находятся рядом с нами
      </span>
      <div className="flex flex-row flex-wrap gap-[70px] items-stretch justify-center">
        {neighbourhoodData
          .filter((s: InfoCardDataType) => {
            return s.variant === 'large'
          })
          .map((s: InfoCardDataType) => {
            return <InfoCard data={s} key={s.title} />
          })}
      </div>

      <div className="gap-[70px] flex flex-row flex-wrap items-stretch justify-center">
        {neighbourhoodData
          .filter((s: InfoCardDataType) => {
            return s.variant === 'small'
          })
          .map((s: InfoCardDataType) => {
            return <InfoCard data={s} key={s.title} />
          })}
      </div>

      <span className="text-60 text-browny text-center pb-[110px]">
        Окрестности, что зовут в путь и наполняют отдых новыми открытиями
      </span>
    </main>
  )
}

export default NeighbourhoodPage
