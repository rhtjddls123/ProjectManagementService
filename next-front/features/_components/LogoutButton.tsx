'use client';

import Image from 'next/image';
import React from 'react';

const LogoutButton = () => {
  return (
    <>
      <button className=' absolute top-2 right-2' onClick={() => {}}>
        <Image
          width={40}
          height={40}
          src={'/svgs/logout.svg'}
          alt='logout'
        ></Image>
      </button>
    </>
  );
};

export default LogoutButton;
