'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const LogoutButton = () => {
  return (
    <>
      <button
        className=' absolute top-[2%] right-[1%]'
        onClick={() => {
          signOut();
        }}
      >
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
