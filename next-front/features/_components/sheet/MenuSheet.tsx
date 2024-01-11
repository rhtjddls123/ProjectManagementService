import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import React from 'react';
import { MenuHoverButton } from './MenuHoverButton';
import MenuSheetContent from './MenuSheetContent';

const MenuSheet = ({ userId }: { userId: number }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <MenuHoverButton userId={userId}>
              <Image
                src={'/svgs/hamburger.svg'}
                width={40}
                height={40}
                alt='hamburger'
              ></Image>
            </MenuHoverButton>
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} closeButton={true} className=' w-[20%] p-2'>
          <MenuSheetContent userId={userId}></MenuSheetContent>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MenuSheet;
