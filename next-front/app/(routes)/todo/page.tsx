import ImageModal from '@/features/_components/modal/ImageModal';
import { ToastDemo } from '@/features/_components/modal/todo/ToastDemo';
import React from 'react';

const CalendarPage = () => {
  return (
    <>
      <div className=' w-[400px]'>
        <ImageModal src='/images/IssueImage3.PNG' alt='aa'></ImageModal>
      </div>
      <ToastDemo></ToastDemo>
    </>
  );
};

export default CalendarPage;
