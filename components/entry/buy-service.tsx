'use client';

import { Services, phoneRegex } from '@/consts';
import type { NextComponentType, NextPageContext } from 'next';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SelectService from '@/components/entry/select-service';
import PhoneInput from './phone-input';

// Select service, name, phone, email, date and submit button

const formSchema = z.object({
  service: z.nativeEnum(Services, {
    errorMap: () => ({ message: 'Пожалуйста, выберите услугу' }),
  }),
  name: z
    .string({ required_error: 'Заполните поле' })
    .min(2, { message: 'Имя слишком короткое' }),
  phone: z
    .string({ required_error: 'Заполните поле' })
    .regex(phoneRegex, 'Неверный номер телефона'),
  email: z
    .string({ required_error: 'Заполните поле' })
    .email({ message: 'Неверный адрес электронной почты' }),
  sum: z
    .string({ required_error: 'Заполните поле' })
    .transform((val, ctx) => {
      const number = parseInt(val, 10);
      if (isNaN(number)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Неверная сумма',
        });
      }
      if (number < 100) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Сумма должна быть не меньше 100 рублей',
        });
        return z.NEVER;
      }
      return number;
    })
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  initialService: Services;
}

const BuyService: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: props.initialService,
      name: '',
      phone: '',
      email: '',
    },
  });

  const handleSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-1 md:gap-4"
      >
        <SelectService />
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
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <PhoneInput {...field} />
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
              <FormLabel>Электронная почта</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="ivanov.ivan@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сумма</FormLabel>
              <FormControl>
                <Input type="number" placeholder="500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Помочь</Button>
      </form>
    </Form>
  );
};

export default BuyService;
