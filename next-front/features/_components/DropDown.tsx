import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
  onDeleteNo: number[];
};

const DropDown = ({ onDeleteNo }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=' font-black'>...</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log(onDeleteNo)}>
          delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
