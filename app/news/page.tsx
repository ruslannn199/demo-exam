import News from '@/components/display/news';
import Title from '@/components/typography/title';
import type { Metadata, NextComponentType, NextPageContext } from 'next';

interface Props {}

export const metadata: Metadata = {
  title: 'Публикации',
};

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <section>
      <Title level={2}>Публикации</Title>
      <News amount={25} />
    </section>
  );
};

export default Page;
