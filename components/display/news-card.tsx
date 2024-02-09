import type { NextComponentType, NextPageContext } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Text from '@/components/typography/text';
import Link from 'next/link';

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const NewsCard: NextComponentType<NextPageContext, {}, Props> = ({
  id,
  image,
  title,
  description,
  date,
}: Props) => {
  return (
    <Link href={`/news/${id}`} prefetch={false}>
      <Card className="flex flex-col gap-2">
        <CardHeader className="relative h-[240px]">
          <Image src={image} alt={title} objectFit="cover" layout="fill" fill />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 pt-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Text>{date}</Text>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;
