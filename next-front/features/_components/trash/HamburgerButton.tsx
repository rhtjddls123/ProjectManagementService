'use client';

import { HamburgerButtonStyle } from '@/features/_styles/styledComponentStyles';

type Props = {
  onClick?: () => void;
  className?: string;
};

const HamburgerButton = ({ onClick, className }: Props) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        <HamburgerButtonStyle />
        <HamburgerButtonStyle />
        <HamburgerButtonStyle />
      </button>
    </>
  );
};

export default HamburgerButton;
