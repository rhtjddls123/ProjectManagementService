'use client';

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import { ReactNode, useEffect, useState } from 'react';
import IssueModalContent from './IssueModalContent';

type Props = {
  children: ReactNode;
};

export function IssueModalDemo({ children }: Props) {
  const [state, setState] = useState(false);
  const stateToggle = () => setState((pre) => !pre);
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <>
      {state && (
        <AlertDialog open={state}>
          <AlertDialogContent
            bgOpacity={'bg-opacity-10'}
            className=' h-[90%] max-w-[80%]'
          >
            <IssueModalContent onClick={stateToggle}>
              {children}
            </IssueModalContent>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
