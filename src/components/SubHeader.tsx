import React from 'react';

const SubHeader: React.FC = () => {
  return (
    <div className='h-[67px] bg-[#FFFFFF] border w-full flex gap-[72px] justify-normal items-center px-28 border-[#E7E7E7]'>
        <h3 className='text-xl text-[#DC4A2D] font-semibold'>Job Preview</h3>
        <h3 className='text-xl text-[#888888] font-medium'>Applicants</h3>
        <h3 className='text-xl text-[#888888] font-medium'>Match</h3>
        <h3 className='text-xl text-[#888888] font-medium'>Messages</h3>
    </div>
  )
}

export default SubHeader


