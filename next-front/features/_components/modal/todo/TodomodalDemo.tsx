import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { DatePickerDemo } from '../../DatePicker';

const TodomodalDemo = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className=' w-[400px]'>
          <div className='grid gap-4'>
            <div className='space-y-2'>
              <h1 className='font-medium leading-none'>Edit Todo</h1>
            </div>
            <div className='grid gap-2'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='width'>Title</Label>
                <Input
                  id='width'
                  defaultValue='100%'
                  className='col-span-2 h-8'
                />
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxWidth'>Date</Label>
                <DatePickerDemo></DatePickerDemo>
              </div>
              <div className='grid grid-rows-1 items-center gap-4'>
                <Label htmlFor='height'>Content</Label>
                <Textarea
                  placeholder='Tell us a little bit about yourself'
                  className='resize-none w-auto'
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default TodomodalDemo;
