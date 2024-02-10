import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
  {
    image: '/reason-achievement.svg',
    text: 'Мы помогаем нашим ученикам достичь их целей в изучении английского языка.',
  },
  {
    image: '/reason-boost.svg',
    text: 'Наши выпускники успешно сдают международные экзамены по английскому языку.',
  },
  {
    image: '/reason-wherever.svg',
    text: 'Вы можете учиться в группах или с любого устройства: компьютера, планшета, смартфона.',
  },
  {
    image: '/reason-whatever.svg',
    text: 'Наши опытные и квалифицированные преподаватели используют индивидуальный подход к каждому ученику, учитывая его потребности и способности.',
  },
];

const schools = [
  {
    image: '/tomsk.jpg',
    address: 'ул. Кирова, д. 56, офис 202',
    email: 'bigbenschool-tomsk@gmail.com',
    phone: '+7 (3822) 49-56-87',
  },
  {
    image: '/novosibirsk.jpg',
    address: 'пр. Карла Маркса, д. 37',
    email: 'bigbenschool-novosibirsk@gmail.com',
    phone: '+7 (383) 238-48-56',
  },
  {
    image: '/krasnoyarsk.jpg',
    address: 'ул. Сурикова, д. 12',
    email: 'bigbenschool-krasnoyarsk@gmail.com',
    phone: '+7 (391) 238-48-56',
  },
  {
    image: '/barnaul.jpg',
    address: 'ул. Попова, д. 14А',
    email: 'bigbenschool-barnaul@gmail.com',
    phone: '+7 (3852) 59-08-76',
  },
  {
    image: '/kemerovo.jpg',
    address: 'ул. Весенняя, д. 19',
    email: 'bigbenschool-kemerovo@gmail.com',
    phone: '+7 (3842) 49-56-87',
  },
];

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col gap-12 py-16 px-4">
      <div className="flex gap-12 bg-primary rounded-2xl p-8 text-primary-foreground">
        <div className="flex flex-col gap-8 w-full md:w-1/2 text-justify md:text-left">
          <Title level={2} className="text-2xl md:text-3xl">Big Ben School</Title>
          <Text className="text-sm sm:text-base">
            “Big Ben School” - это инновационное образовательное
            пространство, основанное на уникальной методике обучения
            английскому языку, разработанной опытными лингвистами и
            педагогами. Наша цель - предоставить каждому ученику
            индивидуальную программу обучения, соответствующую его уровню
            знаний, интересам и целям.{' '}
          </Text>
          <Text className="text-sm sm:text-base">
            В основе нашей методики лежит коммуникативный подход, который
            позволяет ученикам преодолеть языковой барьер и свободно
            общаться на английском языке. Мы используем самые современные и
            эффективные методы обучения, такие как дискуссии, ролевые игры,
            проектная работа и работа в мини-группах.{' '}
          </Text>
          <Text className="text-sm sm:text-base">
            “Big Ben School” предлагает разнообразные курсы и программы для
            детей, подростков и взрослых, начиная от базовых уровней
            Elementary и Pre-Intermediate до продвинутых уровней
            Upper-Intermediate и Advanced. Наши опытные и квалифицированные
            преподаватели используют индивидуальный подход к каждому
            ученику, учитывая его потребности и способности.
          </Text>
          <Text className="text-sm sm:text-base">
            Мы стремимся создать дружественную и комфортную атмосферу на
            занятиях, чтобы каждый ученик чувствовал себя уверенно и мог
            раскрыть свой потенциал. Наша школа оснащена современными
            учебными материалами, интерактивными досками и мультимедийными
            средствами обучения.
          </Text>
          <Text className="text-sm sm:text-base">
            На протяжении всего курса ученики имеют возможность участвовать
            в различных мероприятиях, таких как разговорные клубы,
            тематические недели, конкурсы и олимпиады, что помогает им
            закрепить полученные знания и развить коммуникативные навыки.
          </Text>
        </div>
        <div className="w-1/2 bg-laptop rounded-2xl hidden md:block" />
      </div>
      <section className="flex flex-col gap-8">
        <Title className="text-center" level={2}>
          Почему мы?
        </Title>
        {reasons.map(({ image, text }, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <Image
              src={image}
              alt="reason"
              width={100}
              height={100}
            />
            <Text className="max-w-[60%] w-[395px] text-xl">{text}</Text>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center gap-8" id="contacts">
        <Title className="text-center" level={2}>
          Наши школы
        </Title>
        <div className="flex flex-col gap-8">
          {schools.map(({ image, address, email, phone }, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-8">
              <Image
                src={image}
                alt="school"
                width={200}
                height={200}
              />
              <div className="flex flex-col justify-center gap-2">
                <Text className="w-[100%] max-w-[625px] text-xl">
                  {address}
                </Text>
                <Link
                  href={`mailto:${email}`}
                  className="w-[100%] max-w-[625px] text-xl"
                >
                  {email}
                </Link>
                <Link
                  href={`tel:8${phone.replaceAll(/\D/g, '').substring(1)}`}
                  className="w-[100%] max-w-[625px] text-xl"
                >
                  {phone}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
