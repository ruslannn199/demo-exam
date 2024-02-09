import Title from '@/components/typography/title';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

interface Props {}

const NotFound: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
      <Title className="text-5xl">404 - Страница не найдена</Title>
      <Image src="/404.svg" width={300} height={300} alt="404" />
    </div>
  );
};

export default NotFound;
