import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import type { NextComponentType, NextPageContext } from 'next';
import './globals.css';
import { cn } from '@/lib';
import Header from '@/components/layout/header';
import Main from '@/components/layout/main';
import Footer from '@/components/layout/footer';

const comfortaa = Comfortaa({
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
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          comfortaa.variable,
        )}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
