import type { NextComponentType, NextPageContext } from 'next';
import Logo from '@/components/display/logo';
import Menu from '@/components/navigation/menu';

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <header className="h-16 flex justify-between items-center py-2 px-8 shadow-md bg-secondary fixed top-0 left-0 right-0 z-20">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
