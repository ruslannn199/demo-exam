import Title from '@/components/typography/title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const schools = [
  {
    city: 'Томск',
    image: '/tomsk.jpg',
    address: 'ул.\xa0Кирова, д.\xa056, офис\xa0202',
    addressLink: 'https://yandex.ru/maps/-/CDBfESJH',
    email: `bigbenschool\u2011tomsk@gmail.com`,
    phone: '+7\xa0(3822)\xa049\u201156\u201187',
  },
  {
    city: 'Новосибирск',
    image: '/novosibirsk.jpg',
    address: 'пр.\xa0Карла\xa0Маркса, д.\xa037',
    addressLink: 'https://yandex.ru/maps/-/CDBfEK1z',
    email: `bigbenschool\u2011novosibirsk@gmail.com`,
    phone: '+7 (383) 238\u201148\u201156',
  },
  {
    city: 'Красноярск',
    image: '/krasnoyarsk.jpg',
    address: 'ул.\xa0Сурикова, д.\xa012',
    addressLink: 'https://yandex.ru/maps/-/CDBfEW1y',
    email: `bigbenschool\u2011krasnoyarsk@gmail.com`,
    phone: '+7\xa0(391)\xa0238\u201148\u201156',
  },
  {
    city: 'Барнаул',
    image: '/barnaul.jpg',
    address: 'ул.\xa0Попова, д.\xa014А',
    addressLink: 'https://yandex.ru/maps/-/CDBfED9W',
    email: `bigbenschool\u2011barnaul@gmail.com`,
    phone: '+7\xa0(3852)\xa059\u201108\u201176',
  },
  {
    city: 'Кемерово',
    image: '/kemerovo.jpg',
    address: 'ул.\xa0Весенняя, д.\xa019',
    addressLink: 'https://yandex.ru/maps/-/CDBfELK7',
    email: `bigbenschool\u2011kemerovo@gmail.com`,
    phone: '+7\xa0(3842)\xa049\u201156\u201187',
  },
];

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="select-none">
      <Carousel
        opts={{ loop: true, align: 'start' }}
        className="w-[95%] h-[700px]"
      >
        <CarouselContent>
          {schools.map(
            ({ image, address, addressLink, email, phone, city }) => (
              <CarouselItem key={email} className="flex">
                <div className="flex flex-col gap-4 p-4 max-w-[500px]">
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
                <div className="relative w-full h-[700px]">
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
