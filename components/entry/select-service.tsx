import type { NextComponentType, NextPageContext } from 'next';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Services } from '@/consts';

interface Props {}

const SelectService: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Услуга</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <SelectTrigger>
                <SelectValue
                  id={field.name}
                  placeholder="Выберите услугу"
                  {...field}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Наши услуги</SelectLabel>
                  <SelectItem value={Services.FOR_KIDS}>
                    {Services.FOR_KIDS}
                  </SelectItem>
                  <SelectItem value={Services.FOR_ADULTS}>
                    {Services.FOR_ADULTS}
                  </SelectItem>
                  <SelectItem value={Services.INDIVIDUAL}>
                    {Services.INDIVIDUAL}
                  </SelectItem>
                  <SelectItem value={Services.CORPORATE}>
                    {Services.CORPORATE}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectService;
