import React from 'react';

const JobTitle: React.FC = () => {
  return (
    <div className="w-[1438px] bg-white border flex flex-col items-start justify-center border-[#E7E7E7] py-5 pl-28 h-[155px]">
      <div>
        <div className='flex items-center gap-4'>
        <h1 className="text-2xl text-[#3D3D3D] font-bold">Senior Product Designer</h1>
        <div className="flex items-center text-gray-500">
        <span className="mr-4 text-[#888888] text-sm font-medium">posted 2 days ago</span>
        <div className="flex items-center">
              <span className="text-green-600 border border-green-600 px-5 py-1 bg-[#ECFDF3] rounded-full font-medium text-xs flex items-center">
                <span className="inline-block w-1.5 h-1 bg-green-600 rounded-full mr-1"></span> Open
              </span>
            </div>
      </div>
        </div>
        <div className="flex items-center mt-4 text-[#5D5D5D]">
          <img src="/icons/marker-pin-01.svg" alt="" className='w-4 mr-2 h-5'/>
          <span className="mr-4 text-xl font-medium">Delaware, USA</span>
          <img src="/icons/Icon.svg" alt="" className='w-4 mr-2 h-5'/>
          <span className="text-xl font-medium">$300k-$400k</span>
        </div>
      </div>
    </div>
  );
}

export default JobTitle;


//Senior Product Designer row