import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';

export interface ServiceBadgeProps {
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
}

const ServiceBadge: NextComponentType<
  NextPageContext,
  {},
  ServiceBadgeProps
> = ({
  title,
  shortDescription: description,
  icon,
}: ServiceBadgeProps) => {
  return (
    <Card className="flex flex-col h-full max-h-[360px] hover:translate-y-[-5px] duration-200 cursor-pointer ease-in">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <div className="border-2 border-primary rounded p-2">{icon}</div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="group" asChild>
          <Link href="/help">
            Узнать больше{' '}
            <ArrowRightCircle className="ml-2 rotate-[-45deg] group-hover:rotate-0 duration-200" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceBadge;
