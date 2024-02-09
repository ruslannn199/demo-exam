import type { NextComponentType, NextPageContext } from 'next';
import NewsCard from '@/components/display/news-card';
import { sub } from 'date-fns';

const newsImages: string[] = ['/news-1.jpg', '/news-2.jpg', '/news-3.jpg'];

const generateNews = (amount: number) =>
  [...new Array(amount)].map((_, index) => ({
    id: amount - index,
    title: `Новость №${amount - index}`,
    image: newsImages[index % newsImages.length],
    date: sub(new Date(), { days: index }).toLocaleDateString('ru-RU'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }));

interface Props {
  amount: number;
}

const News: NextComponentType<NextPageContext, {}, Props> = ({
  amount,
}: Props) => {
  const cards = generateNews(amount);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
};

export default News;
