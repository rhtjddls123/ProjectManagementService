import { ScrollArea } from '@/components/ui/scroll-area';
import React, { ReactNode } from 'react';
import IssueModalClose from './IssueModalClose';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const IssueModalContent = ({ onClick, children }: Props) => {
  return (
    <div className=' flex flex-col columns-1 h-full overflow-hidden'>
      <ScrollArea className=' p-2 h-full w-full rounded-md border border-solid border-black'>
        <div className=' min-h-[596px] h-full relative'>
          <div className=' whitespace-pre-wrap h-[90%] pb-[70px]'>
            {children}
          </div>
          <IssueModalClose onClick={onClick}></IssueModalClose>
        </div>
      </ScrollArea>
    </div>
  );
};

export default IssueModalContent;
