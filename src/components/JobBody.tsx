import React from 'react';

const JobBody: React.FC = () => {
  return (
    <div className='w-[1438px] bg-white border border-[#E7E7E7] py-5 pl-28 h-[475px]'>
      <h3 className='text-sm font-medium text-[#6E6d6d]'>About the job</h3>
      <ol className='list-decimal w-[35vw] ml-4 mt-4'>
        <li className='text-base font-medium text-[#3D3D3D]'>Handle the UI/UX research design</li>
        <li className='text-base font-medium text-[#3D3D3D]'>Work on researching on latest web applications designs & trends</li>
        <li className='text-base font-medium text-[#3D3D3D]'> Work on conceptualizing and visualizing</li>
        <li className='text-base font-medium text-[#3D3D3D]'> Work on creating graphics content and other graphic related works</li>
        <h4 className='text-base font-medium text-[#3D3D3D] mt-4 ml-[-16px]'>Benefits:</h4>
        <ul className='list-disc ml-4 mt-2'>
          <li className='text-base font-medium text-[#3D3D3D]'>Health insurance</li>
          <li className='text-base font-medium text-[#3D3D3D]'>Provident Fund</li>
        </ul>
        <h4 className='text-base font-medium text-[#3D3D3D] mt-4 ml-[-16px]'>Schedule:</h4>
        <ul className='list-disc ml-4 mt-2'> 
          <li className='text-base font-medium text-[#3D3D3D]'>Day shift</li>
        </ul>
        <h4 className='text-base font-medium text-[#3D3D3D] mt-4 ml-[-16px]'>Supplemental pay types::</h4>
        <ul className='list-disc ml-4 mt-2'>
          <li className='text-base font-medium text-[#3D3D3D]'>Performance bonus</li>
          <li className='text-base font-medium text-[#3D3D3D]'>Yearly bonus</li>
        </ul>
        <h4 className='text-base font-medium text-[#3D3D3D] mt-4 ml-[-16px]'>Work location:In Person</h4>
      </ol>
    </div>
  )
}

export default JobBody


