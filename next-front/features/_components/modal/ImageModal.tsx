'use client';

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import React, { useReducer } from 'react';

type Props = {
  src: string;
  alt: string;
};

const ImageModal = ({ src, alt }: Props) => {
  const [visible, visibleToggle] = useReducer((pre) => !pre, false);
  return (
    <>
      <Image
        layout={'responsive'}
        src={src}
        alt={alt}
        width={200}
        height={200}
        onClick={visibleToggle}
      ></Image>
      <AlertDialog open={visible}>
        <AlertDialogContent
          bgOpacity={'bg-opacity-10'}
          className=' h-[70%] max-w-[50%]'
          onClick={visibleToggle}
        >
          <Image
            layout={'fill'}
            src={src}
            alt={alt}
            onClick={visibleToggle}
          ></Image>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ImageModal;
