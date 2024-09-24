'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import React, { useEffect, useState } from 'react';
import { RegisterFormProps, variants } from './RegisterForm';

import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { RegisterValues } from '@/types/auth';
import { isValueAvailable } from '@/action/Auth';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const StepThreeForm = ({
  formType,
  route,
  hasNext,
  isFirst,
  availableType,
}: RegisterFormProps) => {
  const router = useRouter();
  const fieldNames = formType.map(
    (field) => field.name as keyof RegisterValues,
  );

  const {
    control,
    trigger,
    formState: { isSubmitting, errors },
    getValues,
    setError,
    clearErrors,
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);

  const isLoginIDAvailable = async (value: string) => {
    const response = await isValueAvailable(availableType!, value);
    const isValid = response.result.available;

    if (!isValid) {
      if (availableType === 'checkPhone') {
        setError('phone', {
          type: 'manual',
          message: '이 전화번호는 이미 사용중입니다.',
        });
      } else if (availableType === 'checkLoginID') {
        setError('loginID', {
          type: 'manual',
          message: '이 아이디는 이미 사용 중입니다',
        });
        console.log(errors.loginID?.message);
      }
    }
  };

  const onClickNext = async (value?: string) => {
    const isValid = await trigger(fieldNames);

    if (value) {
      const response = await isValueAvailable(availableType!, value);
      const isAvailable = response.result.available;

      if (!isAvailable) {
      }
      setError('loginID', {
        type: 'manual',
        message: '이 아이디는 이미 사용 중입니다',
      });
    }
  };

  // console.log('isValid :', isValid);
  // if (errors.loginID?.message) {
  //   console.log(errors.loginID.message);
  // } else {
  //   console.log('clear');
  // }

  return (
    <MotionDiv
      initial={'initial'}
      animate={isExiting ? 'exit' : 'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <section className="mt-20 flex flex-col gap-2 px-8">
        {formType.map((item) => {
          return (
            <FormField
              key={item.id}
              control={control}
              name={item.name as keyof RegisterValues}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormControl>
                      <Input
                        className="custom-input focus-visible:ring-transparent"
                        placeholder={item.placeholder}
                        inputMode={item.inputMode}
                        type={item.type}
                        value={field.value as string | number | undefined}
                        onChange={(e) => {
                          field.onChange(e);
                          trigger(item.name as keyof RegisterValues);
                        }}
                        onBlur={() => {
                          if (item.name === 'loginID') {
                            isLoginIDAvailable(field.value as string);
                          }
                          if (item.name === 'phone') {
                            isLoginIDAvailable(field.value as string);
                          }
                        }}
                      />
                    </FormControl>
                  </div>
                  {errors[item.name as keyof RegisterValues] && <FormMessage />}
                </FormItem>
              )}
            />
          );
        })}
        <Button
          className="custom-button mt-6"
          type="button"
          onClick={onClickNext}
        >
          다음
        </Button>
      </section>
    </MotionDiv>
  );
};

export default StepThreeForm;
