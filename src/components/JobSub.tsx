import React from 'react';

const JobSub: React.FC = () => {
  return (
    <div className="w-[1438px] flex gap-28 items-start justify-start bg-white border border-[#E7E7E7] py-5 pl-28 h-[200px]">
      <div>
        <h2 className="text-sm text-[#6E6D6D] font-medium mb-2">Skills Required</h2>
        <div className="space-y-2">
          <div className="flex items-center border px-2 py-1 rounded">
              <img src="/icons/image 1.png" alt="Figma" className="w-4 h-4 mr-1" />
              <span className="text-gray-700 text-xs font-medium">Figma</span>
            </div>
          <div className="flex items-center border px-2 py-1 rounded">
              <img src="/icons/image 2.png" alt="Figma" className="w-4 h-4 mr-1" />
              <span className="text-gray-700 text-xs font-medium">Adobe Illustrator</span>
            </div>
            <div className="flex items-center border px-2 py-1 rounded">
              <img src="/icons/image 6.png" alt="Figma" className="w-4 h-4 mr-1" />
              <span className="text-gray-700 text-xs font-medium">Adobe XD</span>
            </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm text-[#6E6D6D] font-medium mb-2">Preferred Language</h2>
        <p className="text-[#3D3D3D] font-semibold text-base">English</p>
      </div>
      <div>
        <h2 className="text-sm text-[#6E6D6D] font-medium mb-2">Type</h2>
        <p className="text-[#3D3D3D] font-semibold text-base">Full time</p>
      </div>
      <div>
        <h2 className="text-sm text-[#6E6D6D] font-medium mb-2">Years of Experience</h2>
        <p className="text-[#3D3D3D] font-semibold text-base">3+ Years of Experience</p>
      </div>
    </div>
  );
}

export default JobSub;


//Skills Required row