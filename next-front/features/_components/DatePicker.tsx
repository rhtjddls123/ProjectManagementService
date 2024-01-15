'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import * as React from 'react';
import { cn } from '@/lib/utils';

export function DatePickerDemo() {
  const [range, setRange] = React.useState<DateRange>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !range && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {range && range.from && range.to ? (
            <span>
              {`${format(range.from, 'yyyy-MM-dd')} - ${format(
                range.to,
                'yyyy-MM-dd'
              )}`}
            </span>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar id='test' mode='range' selected={range} onSelect={setRange} />
      </PopoverContent>
    </Popover>
  );
}
