import News from '@/components/display/news';
import ServiceBadge from '@/components/display/service-badge';
import WaysToHelpCard from '@/components/display/ways-to-help-card';
import Question from '@/components/entry/question';
import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import { services } from '@/consts';
import { cn } from '@/lib';
import type { Metadata, NextComponentType, NextPageContext } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
}

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative">
        <video
          src="/promo.mp4"
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
            className="font-thin text-xs sm:text-2xl md:text-4xl"
          >
            Присоединяйтесь к движению HelpingHands и меняйте жизни людей к лучшему, вместе с нашим благотворительным фондом!
          </Title>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <ServiceBadge key={service.title} {...service} />
        ))}
      </div>
      <section className="flex flex-col gap-1">
        <Title level={2} className="text-3xl md:text-5xl text-center">Как помочь?</Title>
        <Text className="sm:text-xl md:text-2xl">Есть очень много разных способов.</Text>
        <Text className="sm:text-xl md:text-2xl">Пожертвование — только один из них.</Text>
        <Text className="sm:text-xl md:text-2xl">Выберите удобный вам формат.</Text>
        <WaysToHelpCard />
      </section>
      <div
        className={cn(
          `flex flex-col items-center w-full gap-24 gap-x-12 md:gap-12`,
        )}
      >
        <Question />
      </div>
      <section>
        <Title level={2}>Публикации</Title>
        <News amount={4} />
      </section>
    </div>
  );
};

export default Page;
