'use client';

import type { NextComponentType, NextPageContext } from 'next';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { cn, useWindowSize } from '@/lib';

interface Props {}

const menuItems = [
  {
    title: 'О Нас',
    href: '/about',
  },
  {
    title: 'Проекты',
    href: '/projects',
  },
  {
    title: 'Помочь',
    href: '/help',
  },
  {
    title: 'События',
    href: '/news',
  },
];

const Menu: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <Toggle
        onClick={handleToggle}
        variant="outline"
        aria-label="Toggle burger"
        className="md:hidden z-20"
      >
        <MenuIcon />
      </Toggle>
      <NavigationMenu
        className={cn(
          width && width < 768
            ? 'absolute top-0 right-0 w-full h-screen bg-white duration-300 shadow-lg'
            : '',
          width && width < 768 && !open ? 'right-[-240px]' : '',
        )}
      >
        <NavigationMenuList
          className={cn(
            width && width < 768 ? 'flex flex-col w-[240px]' : '',
            'gap-4',
          )}
        >
          {menuItems.map(({ title, href }) => (
            <NavigationMenuItem key={title}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  onClick={closeMenu}
                  className={navigationMenuTriggerStyle()}
                >
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Menu;
