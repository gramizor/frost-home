import Image, { StaticImageData } from 'next/image'
import firstSection from '@/public/first-section.png'
import secondSection from '@/public/second-section.png'
import thirdSection from '@/public/third-section.png'

interface SectionElement {
  title: string
  subtitle: string
  imageSrc: StaticImageData
  imageAlt: string
}

export const sectionsData: SectionElement[] = [
  {
    title: 'Место, где природа встречается с комфортом',
    subtitle:
      'Frost Home — это отдых с близкими вдали от городской суеты. Сосновый бор, зелёные поляны и река создают атмосферу уединения и душевного покоя. Здесь легко замедлиться, вдохнуть полной грудью и почувствовать близость к природе, родным и себе.',
    imageSrc: firstSection,
    imageAlt: 'first-section'
  },
  {
    title: 'Дом, в который хочется возвращаться',
    subtitle:
      'Для гостей — уютные дома с камином, кухней и террасой, купель под звёздами, беседки и ухоженные дорожки с мягкой подсветкой. Панорамные окна открывают вид на лес и просторную поляну, а мягкие кресла приглашают укутаться в плед с книгой или чашкой какао. Каждая деталь – от свечей до настольных игр – \n' +
      'создана, чтобы вы почувствовали: здесь вас ждали. ',
    imageSrc: secondSection,
    imageAlt: 'second-section'
  },
  {
    title: 'Всё для вашего идеального отдыха',
    subtitle:
      'Мы продумали каждую мелочь, чтобы вы могли просто наслаждаться моментом. Мягкие кровати, ароматный кофе или чай на террасе, тишина соснового леса и пение птиц — всё это наполняет ваш отдых комфортом и теплом. Здесь не нужно спешить и что-то планировать — только быть в моменте',
    imageSrc: thirdSection,
    imageAlt: 'third-section'
  }
]

export const SectionMain = (props: SectionElement) => {
  const { title, subtitle, imageSrc, imageAlt } = props
  return (
    <div className="flex flex-col gap-[190px] mt-[190px]">
      <div className="text-primary flex flex-col text-center w-full gap-[40px]">
        <span className=" font-cormorant text-6xl">{title}</span>
        <span className="font-inter text-xl font-extralight italic px-12 whitespace-pre-line">
          {subtitle}
        </span>
      </div>
      <Image src={imageSrc} alt={imageAlt} className="h-[580px] w-full object-cover rounded-2xl" />
    </div>
  )
}
