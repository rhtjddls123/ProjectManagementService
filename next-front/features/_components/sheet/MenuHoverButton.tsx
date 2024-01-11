import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import React from 'react';
import MenuSheetContent from './MenuSheetContent';

type Props = {
  userId: number;
  children?: React.ReactNode;
};

export function MenuHoverButton({ userId, children }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <MenuSheetContent userId={userId}></MenuSheetContent>
      </HoverCardContent>
    </HoverCard>
  );
}
