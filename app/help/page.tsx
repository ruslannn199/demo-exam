import BuyServiceModal from '@/components/feedback/buy-service-modal';
import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { services } from '@/consts';
import type { Metadata, NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Помочь',
}

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <section className="pb-12">
      <Title level={2} className="text-center mb-12 md:text-5xl">
        Как вы можете помочь?
      </Title>
      <Accordion type="single" collapsible className="w-full">
        {services.map(
          ({ title: service, description, image }, index) => (
            <AccordionItem value={service} key={service} className="px-12">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex md:flex-col gap-4 w-full items-center md:items-start">
                  <Title level={2}>0{index + 1}</Title>
                  <div className="flex items-center gap-12">
                    <div className="relative hidden sm:block sm:w-[140px] sm:h-[180px]">
                      <Image
                        src={image}
                        alt={service}
                        fill
                        sizes="100vw"
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <Text className="text-xl md:text-3xl">{service}</Text>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-8">
                  <Text className="text-sm sm:text-xl w-full">
                    {description}
                  </Text>
                  <BuyServiceModal service={service} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
    </section>
  );
};

export default Page;
