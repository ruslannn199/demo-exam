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
import DatePicker from '@/components/ui/date-picker';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib';
import { addDays, addMonths, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { ru } from 'date-fns/locale';
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
  date: z.date({ required_error: 'Пожалуйста, выберите дату' }),
  time: z
    .string({ required_error: 'Пожалуйста, выберите время' })
    .min(1, { message: 'Пожалуйста, выберите время' }),
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
      date:
        addDays(new Date(), 1).getDay() === 0
          ? addDays(new Date(), 2)
          : addDays(new Date(), 1),
      time: '',
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
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Выберите свободный день записи</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        'max-w-[280px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', { locale: ru })
                      ) : (
                        <span>Выберите дату</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    locale={ru}
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() ||
                      date > addMonths(new Date(), 2) ||
                      date.getDay() === 0
                    }
                    defaultMonth={field.value}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Выберите время</FormLabel>
              <FormControl>
                <Input
                  type="time"
                  min="09:00"
                  max="18:00"
                  className="md:max-w-[215px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Отправить заявку</Button>
      </form>
    </Form>
  );
};

export default BuyService;
