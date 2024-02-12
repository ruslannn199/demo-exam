import { waysToHelp } from '@/consts';
import type { NextComponentType, NextPageContext } from 'next';
import { Separator } from '@/components/ui/separator';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import Text from '../typography/text';
import { Dot } from 'lucide-react';
import Link from 'next/link';

interface Props {}

const WaysToHelpCard: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col gap-4 items-start mt-4">
      {waysToHelp.map(({ way, description }) => (
        <HoverCard key={way}>
          <HoverCardTrigger asChild>
            <Button
              variant="link"
              className="whitespace-normal items-start h-full text-lg md:text-3xl"
            >
              <Dot className="w-6 h-6" />
              {way}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            className="flex flex-col gap-2 w-[320px] md:w-[560px]"
          >
            <Text className="text-lg md:text-2xl">{description}</Text>
            <Button className="self-end" asChild>
              <Link href="/help">Помочь</Link>
            </Button>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default WaysToHelpCard;
