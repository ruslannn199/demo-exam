import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import Title from '@/components/typography/title';
import Image from 'next/image';

interface Props {}

const Logo: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="logo"
        width={60}
        height={39}
        priority
        className="w-[60px] h-[39px]"
      />
      <Title className="text-xl lg:text-xl">Big Ben</Title>
    </Link>
  );
};

export default Logo;
