'use client';

import Image from 'next/image';
import React from 'react';

const ChatButton = () => {
  return (
    <button onClick={() => {}} className=' absolute bottom-2 right-2'>
      <Image src={'/svgs/chat.svg'} width={30} height={30} alt='chat'></Image>
    </button>
  );
};

export default ChatButton;
