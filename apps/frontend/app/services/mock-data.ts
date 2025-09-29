import spaArea from '@/public/services/spa-area.png'
import font from '@/public/services/font.png'
import conductingEvents from '@/public/services/conducting-events.png'
import sapBoard from '@/public/services/sap-board.png'
import bicycles from '@/public/services/bicycles.png'
import deckChairs from '@/public/services/deck-chairs.png'
import snowmobiles from '@/public/services/snowmobiles.png'
import tableGames from '@/public/services/table-games.png'
import badminton from '@/public/services/badminton.png'
import forestWalks from '@/public/services/forest-walks.png'
import animals from '@/public/services/animals.png'
import { InfoCardDataType } from '@/components/info-card'

export const servicesData: InfoCardDataType[] = [
  {
    title: 'SPA-зона',
    additionalData: 'по предварительному бронированию',
    description:
      'SPA-зона включает русскую баню и хаммам с подсветкой-хромотерапией. Тепло печи и ароматный пар расслабляют, а после можно отдохнуть на шезлонгах с чашкой травяного чая в тишине природы.',
    price: '12 000 руб / 3 часа',
    variant: 'large',
    images: [{ src: spaArea, alt: 'SPA-зона' }]
  },
  {
    title: 'Купель',
    additionalData: ['от 2 часов', 'по предварительному бронированию'],
    description:
      'Уютная купель на отдельной площадке, скрытая от посторонних взглядов высокими туями. Здесь можно расслабиться в тёплой воде, наслаждаясь полной камерностью и красивыми природными ландшафтами. Идеальное место для вечернего отдыха под звёздами или утреннего купания на рассвете.',
    price: ['2 500 (до 2 чел/час)', '3 500 (от 3 чел/час)'],
    variant: 'large',
    images: [{ src: font, alt: 'Купель' }]
  },
  {
    title: 'Проведение мероприятий',
    additionalData: 'от 15 до 200 чел',
    description:
      'Мы предоставляем атмосферную площадку для ваших особенных моментов — будь то свадьба, праздник с друзьями, ретритили мастер-класс. \n' +
      'Бронирование осуществляется заранее, а стоимость согласовывается индивидуально в зависимости от количества гостей.',
    price: 'стоимость по согласованию',
    variant: 'large',
    images: [{ src: conductingEvents, alt: 'Проведение мероприятий' }]
  },
  {
    title: 'Сап борды',
    description:
      'Два сап-борда для прогулок \n' +
      'по живописному озеру, которое находится всего в 10 минутах пешком от нашей Усадьбы. Идеально, чтобы насладиться тишиной, видами и лёгкой физической активностью на воде.',
    additionalData: 'доп.оплата',
    price: '500 руб / час',
    variant: 'small',
    images: [{ src: sapBoard, alt: 'Сап борды' }]
  },
  {
    title: 'Велосипеды',
    description:
      'Велосипеды для прогулок \n' +
      'по окрестностям с разнообразными пейзажами — от тихих лесных троп \n' +
      'до просторных полей и живописных дорожек. Отличный способ насладиться свежим воздухом, природой и активным отдыхом в своём ритме.',
    additionalData: 'доп.оплата',
    price: '350 руб / час',
    variant: 'small',
    images: [{ src: bicycles, alt: 'Велосипеды' }]
  },
  {
    title: 'Шезлонги',
    description:
      'Шезлонги для отдыха на свежем воздухе — расслабьтесь, наслаждаясь солнцем, видом \n' +
      'на природу и лёгким шумом реки. Здесь приятно почитать книгу \n' +
      'и заодно получить красивый загар.',
    additionalData: 'бесплатно',
    price: 'по запросу',
    variant: 'small',
    images: [{ src: deckChairs, alt: 'Шезлонги' }]
  },
  {
    title: 'Снегоходы',
    description:
      'Снегоходы для увлекательных зимних прогулок по заснеженным полям, лесным тропам и замёрзшей реке. Почувствуйте свободу движения, насладитесь зимними пейзажами \n' +
      'и адреналином в каждом повороте.',
    additionalData: 'доп.оплата',
    price: 'стоимость на уточнении',
    variant: 'small',
    images: [{ src: snowmobiles, alt: 'Снегоходы' }]
  },
  {
    title: 'Настольные игры',
    description:
      'Настольные игры для уютных вечеров в кругу семьи и друзей — весёлое времяпрепровождение, которое объединяет и дарит тёплые воспоминания. ',
    additionalData: 'бесплатно',
    price: 'по запросу',
    variant: 'small',
    images: [{ src: tableGames, alt: 'Настольные игры' }]
  },
  {
    title: 'Бадминтон',
    description:
      'Бадминтон на просторном поле \n' +
      'у соснового бора — свежий воздух, аромат хвои и весёлые соревнования в кругу близких.',
    additionalData: 'бесплатно',
    price: 'по запросу',
    variant: 'small',
    images: [{ src: badminton, alt: 'Бадминтон' }]
  },
  {
    title: 'Прогулки по лесу',
    description:
      'Прогулки по хвойному лесу \n' +
      'с мягким ковром из мха — возможность насладиться тишиной, свежим воздухом, пением птиц \n' +
      'и природой в её первозданной красоте.',
    additionalData: 'бесплатно',
    price: 'бесценно',
    variant: 'small',
    images: [{ src: forestWalks, alt: 'Прогулки по лесу' }]
  },
  {
    title: 'Общение с животными',
    description:
      'Тёплое общение с милыми обитателями усадьбы — барашки, козы и куры, которые всегда рады вниманию и угощению.',
    additionalData: 'бесплатно',
    price: 'обратитесь к нашим сотрудникам',
    variant: 'small',
    images: [{ src: animals, alt: 'Общение с животными' }]
  }
]
