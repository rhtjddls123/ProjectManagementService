import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { testProjectList } from '@/features/_utils/util';
import Link from 'next/link';
import React from 'react';

type Props = {
  userId: number;
};

const MyProjectList = ({ userId }: Props) => {
  const myproject = testProjectList(userId);
  return (
    <ScrollArea className='h-full w-full rounded-md border'>
      <div className='p-4'>
        {myproject.map((item) => (
          <div key={item.project_no} className='text-sm text-center'>
            <Link
              href={'/'}
              key={item.project_no}
              className=' block w-full h-full'
            >
              {item.project_title}
            </Link>

            <Separator className='my-2' />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MyProjectList;
