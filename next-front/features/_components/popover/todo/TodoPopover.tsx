import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TodoForm } from './TodoForm';

const TodoPopover = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Edit Todo</Button>
        </PopoverTrigger>
        <PopoverContent className=' w-[400px]'>
          <div className='grid gap-4'>
            <div className='space-y-2'>
              <h1 className='font-medium leading-none'>Edit Todo</h1>
            </div>
            <div className='grid gap-2'>
              <TodoForm></TodoForm>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default TodoPopover;
