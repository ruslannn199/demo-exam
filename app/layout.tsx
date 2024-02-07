import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import type { NextComponentType, NextPageContext } from 'next';
import './globals.css';
import { cn } from '@/lib';

// TODO: Make main layout
// This layout includes header and footer
// Header must contain corporate identity
// Footer must contain copyright, requisites, contacts and social networks
// Also there's need in favicon and meta tags?

const inter = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Title',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}: Props) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
