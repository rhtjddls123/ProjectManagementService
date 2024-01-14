'use client';

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { SheetClose } from '@/components/ui/sheet';
import { X } from 'lucide-react';
import React, { useReducer } from 'react';
import { MenuHoverButton } from './MenuHoverButton';
import MenuSheetContent from './MenuSheetContent';

const MenuSheet = ({ userId }: { userId: number }) => {
  const [trigger, triggerToggle] = useReducer((pre) => !pre, false);
  return (
    <>
      <Sheet open={trigger}>
        <MenuHoverButton
          userId={userId}
          onClick={triggerToggle}
        ></MenuHoverButton>
        <SheetContent
          side={'left'}
          closeButton={false}
          className=' w-[20%] p-2'
        >
          <MenuSheetContent userId={userId}></MenuSheetContent>
          <SheetClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary'>
            <X className='h-4 w-4' onClick={triggerToggle} />
            <span className='sr-only'>Close</span>
          </SheetClose>
          {trigger && (
            <div
              onClick={triggerToggle}
              className={
                'fixed w-[80%] inset-x-[20%] inset-0 z-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
              }
            ></div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MenuSheet;
