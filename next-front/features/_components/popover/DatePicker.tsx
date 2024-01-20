'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Control, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Data } from './todo/TodoForm';

export function DatePickerDemo({ control }: { control: Control<Data, any> }) {
  const [range, setRange] = useState<DateRange>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[238.94px] justify-start text-left font-normal',
            !range && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {range?.from ? (
            range.to ? (
              <>
                {format(range.from, 'yyyy-MM-dd')} -{' '}
                {format(range.to, 'yyyy-MM-dd')}
              </>
            ) : (
              format(range.from, 'yyyy-MM-dd')
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Controller
          name='date'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <>
                <Calendar
                  id='date'
                  mode='range'
                  locale={ko}
                  selected={range}
                  onSelect={(e) => {
                    setRange(e);
                    const formData = {
                      from: e && e.from ? format(e.from, 'yyyy-MM-dd') : '',
                      to:
                        e && e.to ? format(e?.to || Date(), 'yyyy-MM-dd') : '',
                    };
                    onChange(formData);
                  }}
                />
              </>
            );
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
