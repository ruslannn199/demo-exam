'use client';

import type { NextComponentType, NextPageContext } from 'next';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Title from '../typography/title';
import { cn } from '@/lib';
import Text from '@/components/typography/text';

const formSchema = z.object({
  email: z.string().email({ message: 'Неверная почта' }),
  name: z.string().min(2, { message: 'Введите имя' }),
  phone: z.string().min(5, { message: 'Введите номер телефона' }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {}

const Trial: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
    },
  });

  const handleSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 z-10 py-12">
      <Title level={2}>Запишитесь на пробное занятие</Title>
      <Text>Чтобы оценить все преимущества нашей школы</Text>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={cn(
            `flex flex-col w-full py-4 flex-wrap justify-center gap-4`,
            `md:flex-row md:items-center md:max-w-[720px] md:gap-8`,
          )}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Иванов Иван"
                    className="md:max-w-[215px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш номер телефона</FormLabel>
                <FormControl>
                  <Input
                    className="md:max-w-[215px]"
                    placeholder="+7 (999) 999-99-99"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваша почта</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="ivanov.ivan@yandex.ru"
                    className="md:max-w-[215px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Оставить заявку</Button>
        </form>
      </Form>
    </div>
  );
};

export default Trial;
