'use client';

import { ReactNode } from 'react';

type Props = {
  checked: boolean;
  onChange: () => void;
  children?: ReactNode;
};

export const Checkbox = ({ checked, onChange, children }: Props) => {
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={onChange} />
      {children}
    </label>
  );
};
