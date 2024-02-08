import { cn } from '@/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import type { NextComponentType, NextPageContext } from 'next';
import React from 'react';

const titleVariants = cva(['scroll-m-20', 'tracking-tight'], {
  variants: {
    level: {
      1: ['text-4xl', 'font-extrabold', 'lg:text-5xl'],
      2: ['first:mt-0', 'font-semibold', 'border-b', 'pb-2', 'text-3xl'],
      3: ['text-2xl', 'font-semibold'],
      4: ['text-xl', 'font-semibold'],
      5: ['text-sm', 'font-semibold'],
      6: ['text-xs', 'font-semibold'],
    },
  },
  defaultVariants: {
    level: 1,
  },
});

interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

const Title: NextComponentType<NextPageContext, {}, Props> = ({
  level,
  children,
  className,
  ...props
}: Props) => {
  switch (level) {
    case 2:
      return (
        <h2 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h6>
      );
    case 1:
    default:
      return (
        <h1 className={cn(titleVariants({ level, className }))} {...props}>
          {children}
        </h1>
      );
  }
};

export default Title;
