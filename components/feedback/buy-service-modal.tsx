'use client';

import { Services } from '@/consts';
import type { NextComponentType, NextPageContext } from 'next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import BuyService from '../entry/buy-service';

interface Props {
  service: Services;
}

const BuyServiceModal: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="max-w-fit" size="lg">Помочь</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cделать пожертвование</DialogTitle>
        </DialogHeader>
        <BuyService initialService={props.service} />
      </DialogContent>
    </Dialog>
  );
};

export default BuyServiceModal;
