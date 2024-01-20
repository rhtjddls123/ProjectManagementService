'use client';

import { AlertDialogAction } from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useId, useReducer } from 'react';

type Props = {
  onClick?: () => void;
};

const IssueModalClose = ({ onClick }: Props) => {
  const [checked, checkToggle] = useReducer((pre) => !pre, false);
  const id = useId();
  return (
    <div className='flex flex-col items-center space-x-2 bottom-[-4%] left-1/2 right-1/2 absolute w-max -translate-x-2/4 -translate-y-1/2'>
      <div className=' mb-1'>
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={checkToggle}
        ></Checkbox>
        <Label
          htmlFor={id}
          className=' ml-2'
        >{`내용을 모두 확인했습니다.`}</Label>
      </div>
      <AlertDialogAction
        disabled={!checked}
        className={' bg-green-500 hover:bg-green-500/80'}
        onClick={onClick}
      >
        확인
      </AlertDialogAction>
    </div>
  );
};

export default IssueModalClose;
