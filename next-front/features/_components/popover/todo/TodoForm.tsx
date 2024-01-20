'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { DatePickerDemo } from '../DatePicker';

export interface Data {
  title: string;
  content: string;
  date: { from: string; to: string };
}

export function TodoForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm<Data>();

  return (
    <form
      className='space-y-8'
      onSubmit={handleSubmit((data) => {
        if (data.date.from && data.date.to) alert(JSON.stringify(data));
        else alert('날짜를 선택해주세요!');
      })}
    >
      <div className=' flex flex-col'>
        <div className='grid grid-cols-3 items-center gap-4'>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            className='col-span-2 h-10'
            {...register('title', {
              required: '제목을 입력해주세요',
            })}
            aria-invalid={errors.title ? 'true' : 'false'}
          />
        </div>
        {errors.title && (
          <small className=' ml-[50%] mt-[2%] text-red-400'>
            {errors.title.message?.toString()}
          </small>
        )}
      </div>
      <div className='grid grid-cols-3 items-center gap-4'>
        <Label htmlFor='date'>Date</Label>
        <DatePickerDemo control={control}></DatePickerDemo>
      </div>
      <div className=' flex flex-col'>
        <div className='grid grid-rows-1 items-center gap-4'>
          <Label htmlFor='content'>Content</Label>
          <Textarea
            id='content'
            className='resize-none w-auto'
            {...register('content', {
              required: '내용을 입력해주세요',
            })}
            aria-invalid={errors.content ? 'true' : 'false'}
          />
        </div>
        {errors.content && (
          <small className=' text-center text-red-400'>
            {errors.content.message?.toString()}
          </small>
        )}
      </div>
      <Button type='submit' disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
