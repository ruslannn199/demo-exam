import type { NextComponentType, NextPageContext } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib';
import { Services } from '@/consts';

export interface TeachersInfoProps {
  name: string;
  photo?: string;
  role: Services;
  description: string;
}

const TeacherInfo: NextComponentType<
  NextPageContext,
  {},
  TeachersInfoProps
> = ({ name, photo, role, description }: TeachersInfoProps) => {
  return (
    <Card className="max-w-[276px] hover:translate-y-[-5px] duration-200">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={photo || '/avatar.png'}
            alt={name}
            width={276}
            height={276}
          />
          <CardDescription
            className={cn(
              'px-6 absolute right-0 top-[80%] max-w-[200px] text-right z-10 bg-accent text-accent-foreground w-min',
              'before:bg-accent-foreground before:absolute before:skewx-[25deg] before:right-[14px] before:z-20 before:h-full',
              'rounded-l before:block before:origin-top before:w-[16px] before:rounded-l before:left-0',
            )}
          >
            {role}
          </CardDescription>
        </div>
        <CardTitle className="px-6 py-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TeacherInfo;
