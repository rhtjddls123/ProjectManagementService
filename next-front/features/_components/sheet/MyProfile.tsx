import { testProfile } from '@/features/_utils/util';
import React from 'react';

type Props = {
  userId: number;
};

const MyProfile = ({ userId }: Props) => {
  const user = testProfile(userId);
  return (
    <>
      {user.map((item) => (
        <ul key={item.user_id}>
          <li>{item.user_name}</li>
          <li>{item.dept_name}</li>
          <li>{item.user_id}</li>
        </ul>
      ))}
    </>
  );
};

export default MyProfile;
