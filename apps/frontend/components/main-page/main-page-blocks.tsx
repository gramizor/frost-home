import { StaticImageData } from 'next/image'
import firstSection from '@/public/first-section.png'
import secondSection from '@/public/second-section.png'
import thirdSection from '@/public/third-section.png'
import { ImageCarousel } from '@/components/images/image-carousel'

interface SectionElement {
  title: string
  subtitle: string
  imageSrc: StaticImageData
  imageAlt: string
}

export const mainPageBlocksData: SectionElement[] = [
  {
    title: 'Место, где природа встречается с комфортом',
    subtitle:
      'Frost Home — это премиальный отдых с близкими вдали от городской суеты. Сосновый бор, зелёные просторы и река создают атмосферу уединения и душевного покоя. Здесь легко замедлиться, вдохнуть полной грудью и почувствовать близость к природе, родным и себе.',
    imageSrc: firstSection,
    imageAlt: 'first-section'
  },
  {
    title: 'Пространство, в которое хочется возвращаться',
    subtitle:
      'Уютные дома с камином, кухней и террасой, купель под звёздами, большая благоустроенная территория для прогулок \n' +
      'с дорожками и мягкой подсветкой. Панорамные окна открывают вид на лес и просторную поляну, а мягкие кресла приглашают укутаться в плед с книгой или чашкой чая. \n' +
      'Каждая деталь –  от свечей до настольных игр – \n' +
      'создана, чтобы вы почувствовали: здесь вас ждали.',
    imageSrc: secondSection,
    imageAlt: 'second-section'
  },
  {
    title: 'Всё для вашего идеального отдыха',
    subtitle:
      'Мы продумали каждую мелочь, чтобы вы могли просто наслаждаться моментом. Мягкие кровати, ароматный кофе или чай на террасе, тишина соснового леса и пение птиц — всё это наполняет ваш отдых комфортом и теплом. Здесь не нужно спешить и что-то планировать — только быть в моменте.',
    imageSrc: thirdSection,
    imageAlt: 'third-section'
  },
  {
    title: 'Здесь для Вас продумано всё',
    subtitle:
      'На территории в 20 тыс. кв. м. раскинулся уникальный ландшафтный дизайн, за которым с любовью ухаживают наши садовники. Вокруг вас множество пешеходных маршрутов для прогулок, начиная от лесных тропинок, заканчивая пешеходной зоной вдоль озер. Мы уделяем особое внимание чистоте помещений, чтобы каждый гость чувствовал себя комфортно. \n' +
      'Для удобства есть безлимитный скоростной интернет, \n' +
      'подходящий для удалённой работы.\n' +
      'Также из каждого крана в доме течет природная колодезная вода, прошедшая лабораторные исследования и признанная безопасной для питья.',
    imageSrc: thirdSection,
    imageAlt: 'third-section'
  }
]

export const MainPageBlocks = (props: SectionElement) => {
  const { title, subtitle, imageSrc, imageAlt } = props
  return (
    <div className="flex flex-col gap-[190px] mt-[190px]">
      <div className="flex flex-col mx-auto text-center max-w-7xl gap-[20px] ">
        <span className=" font-cormorant text-[68px] text-browny italic font-extralight">
          {title}
        </span>
        <div className="h-1 bg-accentRed w-full" />
        <span className="font-cormorant text-[36px] font-extralight px-12 whitespace-pre-line text-browny">
          {subtitle}
        </span>
      </div>
      <ImageCarousel
        className="h-[580px]"
        images={[
          { src: imageSrc, alt: imageAlt },
          { src: imageSrc, alt: imageAlt },
          { src: imageSrc, alt: imageAlt }
        ]}
      />
    </div>
  )
}
