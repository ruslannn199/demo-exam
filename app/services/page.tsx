import BuyServiceModal from '@/components/feedback/buy-service-modal';
import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Services } from '@/consts';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

const services = [
  {
    service: Services.FOR_KIDS,
    description: `На занятиях мы используем современные и интересные методики,
    которые помогут детям развить навыки общения, восприятия речи на слух, чтения и письма
    на английском языке. Наши опытные преподаватели учитывают возрастные особенности детей
    и делают уроки веселыми и захватывающими, чтобы маленькие ученики чувствовали себя комфортно
    и с удовольствием изучали английский язык.`,
    image: '/for-kids.jpg',
    price: 3500,
  },
  {
    service: Services.FOR_ADULTS,
    description: `Наши опытные преподаватели используют современные методики и индивидуальный подход к каждому ученику,
    чтобы помочь вам достичь своих целей в изучении английского языка. На занятиях мы уделяем внимание всем аспектам языка:
    разговорной речи, восприятию на слух, чтению и письму.`,
    image: '/for-adults.jpg',
    price: 5500,
  },
  {
    service: Services.INDIVIDUAL,
    description: `Мы предлагаем индивидуальные программы обучения английскому языку для детей и взрослых,
    которые учитывают их уровень знаний, интересы и цели. Наши опытные преподаватели используют современные методики
    и индивидуальный подход к каждому ученику, чтобы помочь вам достичь своих целей в изучении английского языка.`,
    image: '/individual.jpg',
    price: 7500,
  },
  {
    service: Services.CORPORATE,
    description: `Мы предлагаем корпоративные программы обучения английскому языку для компаний,
    которые хотят повысить коммуникативные навыки и продуктивность своих сотрудников. Наши опытные преподаватели
    используют современные методики и индивидуальный подход к каждому ученику, чтобы помочь сотрудникам компании
    достичь своих целей в изучении английского языка.`,
    image: '/corporate.jpg',
    price: 10500,
  },
];

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {services.map(({ service, description, image, price }, index) => (
          <AccordionItem value={service} key={service} className="px-12">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-col gap-4 w-full items-start">
                <Title level={2}>0{index + 1}</Title>
                <div className="flex items-center gap-12">
                  <div className="relative w-[140px] h-[180px]">
                    <Image
                      src={image}
                      alt={service}
                      fill
                      sizes="100vw"
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <Text className="text-3xl">{service}</Text>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-8">
                <Text className="text-xl w-full">{description}</Text>
                <div className="flex flex-col items-end gap-4 w-1/3">
                  <Text className="text-xl">Цена: {price}₽ в месяц</Text>
                  <BuyServiceModal service={service} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
