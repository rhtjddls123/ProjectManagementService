'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useReducer } from 'react';
import { Modal } from './Modal';

type Props = {
  src: string;
  alt: string;
};

type styleProps = {
  modalWidth?: string;
  modalHeight?: string;
};

const ImageStyle = styled.img<styleProps>`
  width: ${(props) => props.modalWidth || '800px'};
  height: ${(props) => props.modalHeight || '600px'};
  border-radius: 8px;
`;

export const ImageAndModal = ({
  src,
  alt,
  modalWidth,
  modalHeight,
}: Props & styleProps) => {
  const [visible, visibleToggle] = useReducer((pre) => !pre, false);
  return (
    <>
      <Image
        role='presentation'
        className='w-[400px] border-solid border-[1px] border-black m-[1px]'
        src={src}
        alt={alt}
        onClick={visibleToggle}
      ></Image>
      <Modal
        visible={visible}
        width={modalWidth || '800px'}
        height={modalHeight || '602px'}
      >
        <button
          className={'absolute right-0 top-0 w-[30px] h-[30px]'}
          onClick={visibleToggle}
        >
          X
        </button>
        <ImageStyle
          onClick={visibleToggle}
          src={src}
          alt={alt}
          modalWidth={modalWidth}
          modalHeight={modalHeight}
        ></ImageStyle>
      </Modal>
    </>
  );
};
