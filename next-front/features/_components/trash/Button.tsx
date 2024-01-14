import { Button } from '@/features/_styles/styledComponentStyles';
import { buttonStyleProps } from '@/features/_types/type';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const FormButton = (props: Props & buttonStyleProps) => {
  return (
    <Button
      onClick={props.onClick}
      color={props.color}
      disabled={props.disabled}
      opacity={props.disabled ? '0.5' : '1'}
    >
      {props.children}
    </Button>
  );
};
