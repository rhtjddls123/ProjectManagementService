import Image from 'next/image';
import React from 'react';

const TrashButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className=' absolute bottom-2 right-2'>
      <Image src={'/svgs/trash.svg'} width={30} height={30} alt='trash'></Image>
    </button>
  );
};

export default TrashButton;
