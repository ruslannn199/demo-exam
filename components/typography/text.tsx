import { cn } from '@/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import type { NextComponentType, NextPageContext } from 'next';
import React from 'react';

const textVariants = cva('text-base', {
  variants: {
    secondary: {
      true: 'secondary-foreground',
    },
    white: {
      true: 'white',
    },
    bold: {
      true: 'font-bold',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
    strikethrough: {
      true: 'line-through',
    },
    uppercase: {
      true: 'uppercase',
    },
    lowercase: {
      true: 'lowercase',
    },
    capitalize: {
      true: 'capitalize',
    },
  },
});

interface Props
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {}

const Text: NextComponentType<NextPageContext, {}, Props> = ({
  children,
  className,
  secondary,
  white,
  bold,
  italic,
  underline,
  strikethrough,
  uppercase,
  lowercase,
  capitalize,
  ...props
}: Props) => {
  return (
    <span
      className={cn(
        textVariants({
          secondary,
          white,
          bold,
          italic,
          underline,
          strikethrough,
          uppercase,
          lowercase,
          capitalize,
          className,
        }),
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
