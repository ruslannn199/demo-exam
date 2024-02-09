import News from '@/components/display/news';
import ServiceBadge, {
  type ServiceBadgeProps,
} from '@/components/display/service-badge';
import TeacherInfo, {
  type TeachersInfoProps,
} from '@/components/display/teacher-info';
import Question from '@/components/entry/question';
import Trial from '@/components/entry/trial';
import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import { Separator } from '@/components/ui/separator';
import { Services } from '@/consts';
import { cn } from '@/lib';
import { IconFriends, IconUsersGroup } from '@tabler/icons-react';
import { BabyIcon, CircleUserRoundIcon } from 'lucide-react';
import type { NextComponentType, NextPageContext } from 'next';

// TODO: Main page
// Main page must include next components:
// 1. Order a service. Form in a modal with next fields:
// Select service, name, phone, email, date and submit button
// 2. News page from news card: max 3 cards

interface Props {}

const servicesData: ServiceBadgeProps[] = [
  {
    title: 'Для детей',
    description: `Уникальные программы изучения для детей:
    помогаем не только освоить новый язык, но и развить критическое мышление и творческие навыки`,
    image: <BabyIcon />,
    link: '/services#children',
  },
  {
    title: 'Для взрослых',
    description: `Взрослые могут овладеть английским языком с помощью комплексных программ,
    которые сочетают изучение новых слов и фраз с развитием коммуникативных навыков и культурных знаний`,
    image: <IconFriends />,
    link: '/services#adults',
  },
  {
    title: 'Индивидуальные занятия',
    description: `Индивидуальные уроки английского языка, адаптированные к уникальным потребностям каждого учащегося,
    позволяют применять индивидуальный подход, обеспечивающий эффективное обучение и максимальный прогресс`,
    image: <CircleUserRoundIcon />,
    link: '/services#individual',
  },
  {
    title: 'Корпоративное обучение',
    description: `Индивидуальные программы обучения английскому языку для корпоративных клиентов,
    помогающие компаниям повысить коммуникативные навыки и продуктивность своих сотрудников`,
    image: <IconUsersGroup />,
    link: '/services#corporate',
  },
];

const advantages: string[] = [
  `Опыт работы: BigBen имеет многолетний опыт работы в сфере преподавания английского языка,
  что позволяет нам предоставлять высококачественные услуги нашим клиентам.`,
  `Индивидуальный подход: Мы предлагаем индивидуальные программы обучения для каждого студента,
  учитывая его уровень знаний, интересы и цели.`,
  `Гибкость: Наши курсы доступны как в очном, так и в онлайн формате,
  что делает их доступными для студентов из разных городов и стран.`,
  `Профессиональные преподаватели: Наши преподаватели имеют высокую квалификацию
  и большой опыт работы в области преподавания английского языка.`,
  `Удобное расположение: Школа находится в центре города, что обеспечивает удобство для студентов,
  которые могут легко добраться до нас.`,
];

const teachersData: TeachersInfoProps[] = [
  {
    name: 'Картышева Мария',
    photo: '/kartysheva.jpg',
    role: Services.FOR_CHILDREN,
    description:
      'Эксперт ОГЭ и ЕГЭ по английскому языку. Учитель школы «Летово». Ученый секретарь Орфографической комиссии РАН.',
  },
  {
    name: 'Симакова Виктория',
    photo: '/simakova.jpg',
    role: Services.FOR_ADULTS,
    description:
      'Преподаватель английского языка, переводчик. Обладатель сертификата TESOL.',
  },
  {
    name: 'Шкляева Елена',
    photo: '/shklyaeva.jpg',
    role: Services.CORPORATE,
    description:
      'Преподаватель английского языка со стажем более 10 лет. Обладатель сертификата CELTA.',
  },
  {
    name: 'Голубев Максим',
    photo: '/golubev.jpg',
    role: Services.INDIVIDUAL,
    description: `Автор методических пособий для изучения английского языка.
    Сертифицированный специалист по методике преподавания английского языка как иностранного (TEFL)`,
  },
];

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative">
        <video
          src="/main.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full"
        />
        <article className="absolute bottom-0 w-full bg-secondary text-center py-4 md:py-10 angle before:bg-secondary before:rotate-180">
          <Title level={2} className="font-thin text-xl sm:text-2xl md:text-4xl">
            Big Ben - это онлайн и оффлайн школа английского языка для
            детей и взрослых
          </Title>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service) => (
          <ServiceBadge key={service.title} {...service} />
        ))}
      </div>
      <section className="flex flex-col">
        <Title level={2}>Мы предлагаем:</Title>
        <ul className="my-6 ml-6 list-desc [&>li]:mt-2">
          {advantages.map((advantage, index) => (
            <li className="text-xl flex flex-col gap-2" key={index}>
              {advantage}
              <Separator />
            </li>
          ))}
        </ul>
      </section>
      <div
        className={cn(
          `flex flex-col items-center w-full gap-12`,
          `before:absolute before:h-[616px] md:before:h-[400px] before:w-full before:bg-secondary before:mx-[-16px]`,
        )}
      >
        <Trial />
        <Question />
      </div>
      <section className="flex flex-col justify-center items-center gap-8 text-center">
        <Title level={2}>Наши преподаватели</Title>
        <Text className="px-12">
          У нас работают лучшие преподаватели России в сегменте
          дополнительного школьного образования по данным исследования:
          сотрудники МФТИ и НИУ ВШЭ, члены жюри Всероссийской олимпиады,
          эксперты ОГЭ и ЕГЭ.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {teachersData.map((info) => (
            <TeacherInfo key={info.name} {...info} />
          ))}
        </div>
      </section>
      <section>
        <Title level={2}>Последние новости</Title>
        <News amount={3} />
      </section>
    </div>
  );
};

export default Page;
