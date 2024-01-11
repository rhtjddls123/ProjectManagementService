import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import MyProfile from './MyProfile';
import MyProjectList from './MyProjectList';

const MenuSheetContent = ({ userId }: { userId: number }) => {
  return (
    <div
      className={cn(
        ' flex items-center flex-col flex-wrap content-center h-full w-full'
      )}
    >
      <div className=' flex-grow-[1] basis-0'>
        <Avatar className=' w-24 h-24'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className=' text-center'>
          <MyProfile userId={userId}></MyProfile>
        </div>
      </div>
      <div className=' flex-grow-[10] w-full h-[400px] basis-0'>
        <MyProjectList userId={userId}></MyProjectList>
      </div>
      <div className=' flex w-full flex-grow basis-0'>
        <Link
          href={'/'}
          className=' flex flex-wrap justify-center content-center flex-grow-[20]'
        >
          Issue
        </Link>
        <Link
          href={'/'}
          className=' flex flex-wrap justify-center content-center flex-grow-[1]'
        >
          <Image
            src={'/svgs/trash.svg'}
            width={25}
            height={25}
            alt='trash'
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default MenuSheetContent;
