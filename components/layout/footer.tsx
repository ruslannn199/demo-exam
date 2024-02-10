import type { NextComponentType, NextPageContext } from 'next';
import Logo from '@/components/display/logo';
import Link from 'next/link';
import Title from '@/components/typography/title';
import { cn } from '@/lib';
import {
  IconBrandVk,
  IconBrandOkRu,
  IconBrandInstagram,
  IconBrandTelegram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';
import Text from '@/components/typography/text';

interface Props {}

const usefulLinks: React.ReactNode[] = [
  <Link href="/about" key="about">
    О компании
  </Link>,
  <Link href="/#teachers" key="teachers">
    Преподаватели
  </Link>,
  <Link href="/about#contacts" key="contacts">
    Контакты
  </Link>,
];

const socialNetworksData = [
  {
    key: 'vk',
    href: 'https://vk.com/bigbenschool',
    icon: <IconBrandVk />,
    text: 'ВКонтакте',
  },
  {
    key: 'ok',
    href: 'https://ok.ru/bigbenschool',
    icon: <IconBrandOkRu />,
    text: 'Одноклассники',
  },
  {
    key: 'instagram',
    href: 'https://instagram.com/bigbenschool',
    icon: <IconBrandInstagram />,
    text: 'Instagram',
  },
  {
    key: 'telegram',
    href: 'https://t.me/bigbenschool',
    icon: <IconBrandTelegram />,
    text: 'Телеграм',
  },
];

const socialNetworks: React.ReactNode[] = socialNetworksData.map(
  ({ key, href, icon, text }) => (
    <Link
      href={href}
      prefetch={false}
      key={key}
      className="flex gap-2 items-center"
      target="_blank"
    >
      {icon}
      {text}
    </Link>
  ),
);

const contactsData = [
  {
    key: 'vk',
    icon: <IconBrandVk />,
    text: 'Чат ВКонтакте',
    href: 'https://vk.com/im?sel=98328412',
    target: '_blank',
  },
  {
    key: 'telegram',
    icon: <IconBrandTelegram />,
    text: 'Бот в Телеграме',
    href: 'https://t.me/bigbenschool_bot',
    target: '_blank',
  },
  {
    key: 'phone',
    icon: <IconPhone />,
    text: '8 800 555-35-35',
    href: 'tel:88005553535',
    target: '_self',
  },
  {
    key: 'email',
    icon: <IconMail />,
    text: 'bigbenschool@gmail.com',
    href: 'mailto:bigbenschool@gmail.com',
    target: '_self',
  },
];

const contacts: React.ReactNode[] = contactsData.map(
  ({ key, icon, text, href, target }) => (
    <Link
      href={href}
      prefetch={false}
      key={key}
      target={target}
      className="flex gap-2 items-center"
    >
      {icon}
      {text}
    </Link>
  ),
);

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <footer
      className={cn(
        'absolute bottom-0 w-full bg-primary text-primary-foreground px-8 py-6',
        'angle flex flex-wrap flex-col gap-4 justify-around md:flex-row md:flex-nowrap',
      )}
    >
      <div className="container mx-auto px-8 flex flex-col gap-2">
        <Logo className="text-primary-foreground mb-4" />
        {...usefulLinks}
      </div>
      <div className="container mx-auto px-8 flex flex-col gap-2">
        <Title className="text-primary-foreground" level={3}>
          Социальные сети
        </Title>
        {...socialNetworks}
      </div>
      <div className="container mx-auto px-8 flex flex-col gap-2">
        <Title className="text-primary-foreground" level={3}>
          Свяжитесь с нами
        </Title>
        {...contacts}
        <Text className="text-primary-foreground mt-4 flex items-center gap-2">
          <Text className="text-2xl">©</Text>BigBenSchool,{' '}
          {new Date().getFullYear()}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
