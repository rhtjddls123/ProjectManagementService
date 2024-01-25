import { testProfile } from '@/features/_utils/util';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {
  userId: number;
};

const MyProfile = ({ userId }: Props) => {
  const user = testProfile(userId);
  const { data: session } = useSession();
  return (
    <>
      <ul>
        <li>{session?.user?.name}</li>
        <li>{user.dept_name}</li>
        <li>{session?.user?.email}</li>
      </ul>
    </>
  );
};

export default MyProfile;
