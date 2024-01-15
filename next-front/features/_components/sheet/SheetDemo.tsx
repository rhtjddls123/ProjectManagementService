import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];
type Props = {
  side: SheetSide;
  children?: React.ReactNode;
  closeButton?: boolean;
};

export function SheetSide({ side, children, closeButton }: Props) {
  return (
    <Sheet open={true}>
      <SheetTrigger asChild>
        <Button variant='outline'>{side}</Button>
      </SheetTrigger>
      <SheetContent side={side} closeButton={closeButton}>
        {children}
      </SheetContent>
    </Sheet>
  );
}
