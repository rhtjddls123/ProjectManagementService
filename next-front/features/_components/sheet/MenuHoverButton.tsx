import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Image from 'next/image';
import React from 'react';
import MenuSheetContent from './MenuSheetContent';

type Props = {
  userId: number;
  onClick?: () => void;
};

export function MenuHoverButton({ userId, onClick }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button size={'icon'} variant={'outline'} onClick={onClick}>
          <Image
            src={'/svgs/hamburger.svg'}
            width={40}
            height={40}
            alt='hamburger'
          ></Image>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <MenuSheetContent userId={userId}></MenuSheetContent>
      </HoverCardContent>
    </HoverCard>
  );
}
