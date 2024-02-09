import News from '@/components/display/news';
import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return <News amount={25} />;
};

export default Page;
