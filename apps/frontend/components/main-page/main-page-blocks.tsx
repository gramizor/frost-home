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
    title: 'Пространство, где природа встречается с комфортом',
    subtitle:
      'Frost Home — это премиальный отдых с близкими вдали от городской суеты. Сосновый бор, река, зелёные просторы и чистый воздух создают атмосферу уединения и душевного покоя. Здесь легко замедлиться, вдохнуть полной грудью и почувствовать близость к природе, к родным и к себе. Дома укрыты среди деревьев и невидимы друг для друга. Здесь легко поверить, что Вы — единственные, кто знает о существовании этого тихого уголка.',
    imageSrc: firstSection,
    imageAlt: 'first-section'
  },
  {
    title: 'Место, в которое хочется возвращаться',
    subtitle:
      'В Вашем распоряжении большая благоустроенная территория для прогулок со стильным ландшафтным дизайном. Повсюду открываются потрясающие виды на природу, которая становится ближе к Вам как никогда прежде. Каждая деталь в наших уютных домах - создана, чтобы Вы почувствовали, что здесь Вас ждали.',
    imageSrc: secondSection,
    imageAlt: 'second-section'
  },
  {
    title: 'Всё для вашего идеального отдыха',
    subtitle:
      'Мы продумали каждую деталь, чтобы Вы могли просто наслаждаться моментом. Мягкие кровати, ароматный кофе или чай на террасе, треск дров в камине, тишина соснового леса за окном под мелодию птичьего пения — всё это наполняет отдых теплом и гармонией. Здесь Вам не нужно планировать или торопиться — только быть в моменте и наслаждаться тишиной.',
    imageSrc: thirdSection,
    imageAlt: 'third-section'
  },
  {
    title: 'Здесь для Вас продумано всё',
    subtitle:
      'На двух гектарах земли раскинулась наша живописная территория. Здесь Вас ждут живые пейзажи и тишина, наполненная природной гармонией. Наши дома всегда сияют чистотой, а из каждого крана течёт кристально чистая природная вода, признанная безопасной для питья. ' +
      'Здесь всё создано для вашего комфорта и спокойствия — чтобы Вы могли по-настоящему расслабиться и насладиться природой.',
    imageSrc: thirdSection,
    imageAlt: 'third-section'
  }
]

export const MainPageBlocks = (props: SectionElement) => {
  const { title, subtitle, imageSrc, imageAlt } = props
  return (
    <div className="flex flex-col gap-[190px] mt-[190px]">
      <div className="flex flex-col mx-auto text-center gap-[20px]">
        <span className="font-cormorant text-64 text-browny italic font-extralight px-[60px]">{title}</span>
        <div className="h-2 bg-accentRed w-full" />
        <span className="font-cormorant text-36 font-extralight whitespace-pre-line text-browny px-[60px]">
          {subtitle}
        </span>
      </div>
      <ImageCarousel className="h-[580px]" images={[{ src: imageSrc, alt: imageAlt }]} />
    </div>
  )
}
