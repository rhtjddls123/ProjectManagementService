'use client';

import HamburgerButton from '@/features/_components/HamburgerButton';
import { Modal } from '@/features/_components/Modal';
import TrashButton from '@/features/_components/TrashButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useReducer, useState } from 'react';

type project = {
  Project: projectType[];
};

type projectType = {
  project_no: number;
  project_title: string;
};

type user = {
  USER: userType[];
};

type userType = {
  user_no: number;
  user_id: string;
  user_password: string;
  dept_name: string;
  dept_id: string;
  user_name: string;
};

const Menu = () => {
  const [project, setProject] = useState<project>();
  const [user, setUser] = useState<user>();
  const [visible, visibleToggle] = useReducer((pre) => !pre, false);
  const url = '/_mocks/project.json';
  const userUrl = '/_mocks/user.json';
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => setProject(data));
    fetch(userUrl, { signal })
      .then((res) => res.json())
      .then((data) => setUser(data));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <HamburgerButton
        onClick={visibleToggle}
        className={'relative left-2 top-2'}
      ></HamburgerButton>
      {visible && (
        <Modal height={'100%'} className={'fixed left-0 top-0 h-full'}>
          <button
            onClick={visibleToggle}
            className={'absolute right-0 top-0 w-[30px] h-[30px]'}
          >
            x
          </button>
          <div className=' relative ml-auto mr-auto top-[5%] rounded-[70%] overflow-hidden w-[150px] h-[150px]'>
            <Image
              src={'/images/dummy_profile.jpg'}
              width={300}
              height={230}
              alt='profile'
            ></Image>
          </div>
          {user?.USER.map(
            (item) =>
              item.user_no === 1 && (
                <ul
                  key={item.user_no}
                  className=' relative ml-auto mr-auto mt-[15%]'
                >
                  <li key={item.user_name}>{item.user_name}</li>
                  <li key={item.dept_name}>{item.dept_name}</li>
                  <li key={item.user_id}>{item.user_id}</li>
                </ul>
              )
          )}
          <ul className=' ml-auto mr-auto leading-[3] mt-[revert] overflow-auto text-center h-[320px] w-[300px] scrollbar-hide'>
            {project?.Project.map((item) => (
              <li key={item.project_no}>
                <Link href={'/'}>{item.project_title}</Link>
              </li>
            ))}
          </ul>
          <Link
            href={'/'}
            className='w-[300px] h-[30px] text-center bottom-1 absolute'
          >
            Issue
          </Link>
          <TrashButton onClick={() => {}}></TrashButton>
        </Modal>
      )}
    </>
  );
};

export default Menu;
