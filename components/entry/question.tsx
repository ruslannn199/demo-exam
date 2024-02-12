'use client';

import type { NextComponentType, NextPageContext } from 'next';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Title from '@/components/typography/title';
import Text from '../typography/text';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Введите имя' }),
  phone: z.string().min(5, { message: 'Введите номер телефона' }),
  question: z.string().min(10, { message: 'Вопрос слишком короткий' }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {}

const Question: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      question: '',
    },
  });

  const handleSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <div id="contacts" className="w-[80%] flex flex-col md:flex-row justify-center p-8 gap-6 sm:gap-12 border-4 rounded-xl">
      <div className="flex flex-col gap-4 sm:gap-8">
        <Title
          level={2}
          className="uppercase text-2xl sm:text-3xl md:text-5xl"
        >
          Оставьте заявку, и мы ответим на вопросы
        </Title>
        <Text className="text-sm md:text-xl">
          Позвоним с 8:00 до 22:00. Задавайте любые вопросы, а мы ответим и
          расскажем, как вы можете нам помочь.
        </Text>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 sm:max-w-[425px] z-10 w-full py-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван" {...field} />
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
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш вопрос</FormLabel>
                <FormControl>
                  <Textarea {...field} />
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

export default Question;
