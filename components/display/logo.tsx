import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import Title from '@/components/typography/title';
import { cn } from '@/lib';
import LogoImg from '@/public/logo.svg';

interface Props {
  className?: string;
  footer?: boolean;
}

const Logo: NextComponentType<NextPageContext, {}, Props> = (
  { footer, ...props }: Props,
) => {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2', footer ? 'text-primary-foreground mb-4' : '', props.className)}
    >
      <div className="w-[60px] h-[39px]">
        <LogoImg {...(footer ? { fill: '#fff' } : {})} />
      </div>
      <Title className="text-xl lg:text-xl">HelpingHands</Title>
    </Link>
  );
};

export default Logo;
