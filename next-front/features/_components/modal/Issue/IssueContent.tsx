import { issueType } from '@/features/_types/type';
import React from 'react';
import ImageModal from '../ImageModal';

const IssueContent = ({ item }: { item: issueType }) => {
  return (
    <>
      <div className=' text-center'>
        <div className=' mb-[3%] font-bold text-2xl'>{item.title}</div>
        <div className=' flex flex-row flex-wrap w-full'>
          {item.img?.map((img) => (
            <div
              className='w-[48%] border border-solid border-black border-opacity-30 rounded-sm m-[2px]'
              key={img}
            >
              <ImageModal src={img} alt='issueImage'></ImageModal>
            </div>
          ))}
        </div>
        <div>{item.content}</div>
      </div>
    </>
  );
};

export default IssueContent;
