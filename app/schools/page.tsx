import Title from '@/components/typography/title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { schools } from '@/consts';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex items-center ml-12 select-none">
      <Carousel
        opts={{ loop: true, align: 'start' }}
        className="w-[85%] xl:max-w-[1200px] h-full lg:h-[500px] xl:h-[700px]"
      >
        <CarouselContent>
          {schools.map(
            ({ image, address, addressLink, email, phone, city }) => (
              <CarouselItem
                key={city}
                className="flex flex-col lg:flex-row"
              >
                <div className="flex flex-col gap-4 p-4 max-w-[500px] text-sm sm:text-base">
                  <Title level={3}>Школа в г.{city}</Title>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary rounded-full p-3">
                      <MapPin />
                    </div>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      prefetch={false}
                      href={addressLink}
                    >
                      Находится по адресу:
                      <br />
                      {address}
                    </Link>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary rounded-full p-3">
                      <Mail />
                    </div>
                    <Link href={`mailto:${email}`}>Email: {email}</Link>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary rounded-full p-3">
                      <Phone />
                    </div>
                    <Link href={`tel:8${phone.replace(/\D/g, '')}`}>
                      Телефон: {phone}
                    </Link>
                  </div>
                </div>
                <div className="relative w-full h-[240px] sm:h-[360px] md:h-[500px] xl:h-[700px]">
                  <Image src={image} alt={email} fill />
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;
