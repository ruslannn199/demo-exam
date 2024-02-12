import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { projects } from '@/consts';
import { cn } from '@/lib';
import { MapPin, Phone } from 'lucide-react';
import type { Metadata, NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Проекты',
};

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-12 pb-24 md:pb-12">
      {projects.map(({ images, name, cities, phone }, index) => (
        <div className="flex flex-col gap-8" key={index}>
          <Title level={3}>{name}</Title>
          <div className="flex items-center gap-2">
            <div className="bg-secondary rounded-full p-3">
              <MapPin />
            </div>
            <Text className="ml-2">
              Мероприятия проходят в следующих городах:
              {cities.map((city, index) => (index !== cities.length - 1 ? ` ${city},` : ` ${city}`))}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary rounded-full p-3">
              <Phone />
            </div>
            <Link href={`tel:8${phone.replace(/\D/g, '')}`}>
              Телефон: {phone}
            </Link>
          </div>
          <div className="flex items-center ml-12 select-none">
            <Carousel
              opts={{ loop: true, align: 'start' }}
              className={cn(
                'w-full max-w-[240px] md:max-w-[560px] lg:max-w-[700px] xl:max-w-[1100px]',
              )}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className={cn(
                      'relative max-w-[240px] md:max-w-[560px] lg:max-w-[700px] xl:max-w-[1100px]',
                      'h-[180px] md:h-[480px] lg:h-[500px] xl:h-[700px]'
                    )}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
