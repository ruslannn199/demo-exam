import type { NextComponentType, NextPageContext } from 'next';

interface Props {
  children?: React.ReactNode;
}

const Main: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}: Props) => {
  return (
    <main className="container mx-auto px-4 pb-8 pt-[calc(64px+32px)]">
      {children}
    </main>
  );
};

export default Main;
