import News from '@/components/display/news';
import ServiceBadge from '@/components/display/service-badge';
import TeacherInfo from '@/components/display/teacher-info';
import Question from '@/components/entry/question';
import Trial from '@/components/entry/trial';
import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import { Separator } from '@/components/ui/separator';
import { services, advantages, teachers } from '@/consts';
import { cn } from '@/lib';
import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

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
        <article
          className={cn(
            'absolute bottom-0 w-full bg-secondary text-center py-2 sm:py-4 md:py-10',
            'angle before:bg-secondary before:rotate-180',
          )}
        >
          <Title
            level={2}
            className="font-thin text-sm sm:text-2xl md:text-4xl"
          >
            Big Ben - это онлайн и оффлайн школа английского языка для
            детей и взрослых
          </Title>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
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
          `flex flex-col items-center w-full gap-24 gap-x-12 md:gap-12`,
          `before:absolute before:h-[600px] md:before:h-[400px] before:w-full before:bg-secondary before:mx-[-16px]`,
        )}
      >
        <Trial />
        <Question />
      </div>
      <section
        className="flex flex-col justify-center items-center gap-8 text-center"
        id="teachers"
      >
        <Title level={2}>Наши преподаватели</Title>
        <Text className="px-12">
          У нас работают лучшие преподаватели России в сегменте
          дополнительного школьного образования по данным исследования:
          сотрудники МФТИ и НИУ ВШЭ, члены жюри Всероссийской олимпиады,
          эксперты ОГЭ и ЕГЭ.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {teachers.map((info) => (
            <TeacherInfo key={info.name} {...info} />
          ))}
        </div>
      </section>
      <section>
        <Title level={2}>Последние новости</Title>
        <News amount={4} />
      </section>
    </div>
  );
};

export default Page;
