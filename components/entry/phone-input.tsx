'use client';

import type { NextComponentType, NextPageContext } from 'next';
import BasePhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import type { ControllerRenderProps } from 'react-hook-form';

interface Props extends ControllerRenderProps<any, any> {}

const PhoneInput: NextComponentType<NextPageContext, {}, Props> = ({
  ref,
  ...props
}: Props) => {
  return (
    <BasePhoneInput
      {...props}
      defaultCountry="RU"
      placeholder="+7 (999) 999-99-99"
    />
  );
};

export default PhoneInput;
