'use client';

import { ModalStyle } from '../_styles/styledComponentStyles';
import { modalStyleProps } from '../_types/type';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Modal = (props: Props & modalStyleProps) => {
  return (
    <>
      <div className={props.className}>
        <ModalStyle
          visible={props.visible}
          bgColor={props.bgColor}
          width={props.width}
          height={props.height}
        >
          {props.children}
        </ModalStyle>
      </div>
    </>
  );
};
