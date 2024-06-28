// import React from 'react';

function Header() {
  return (
    <div className="w-full h-[100px] text-black gap-0 flex justify-center items-center bg-white shadow-md">
      <div className="h-[61px] flex justify-between items-center px-8 w-full">
        <h2 className="text-[#DC4A2D] font-bold text-xl p-[9px] pr-[28px] pb-[9px] pl-[28px] bg-[#E7E7E7]">
          Logo
        </h2>
        <div className="w-[538px] h-[74px] flex justify-between items-center px-5 rounded-full border border-[#D1D1D1]">
          <button className="bg-[#DC4A2D] border border-[#FCB4A5] text-white font-medium text-xl px-6 py-2 rounded-full">
            Jobs
          </button>
          <span className="text-[#B0B0B0] text-xl font-medium flex items-center">
            <span className="inline-block mr-2 mt-1 relative">
              <img
                src="/icons/message-square-01.svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <span
                className="absolute top-[0px] right-[0px] w-[6px] h-[6px] bg-[#DC4A2D] rounded-full"
              ></span>
            </span>
            Messages
          </span>
          <span className="text-[#B0B0B0] text-xl font-medium">
            <img
              className="inline-block mr-2 mb-1"
              src="/icons/Icon.png"
              alt=""
            />
            Payments
          </span>
        </div>
        <div className="w-[134px] flex items-center justify-center gap-4 h-[60px] p-2 relative">
          <div className="relative">
            <img
              src="/icons/bell-02.svg"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <span
              className="absolute top-[5px] right-[2px] w-[6px] h-[6px] bg-[#DC4A2D] rounded-full"
            ></span>
          </div>
          <img src="/icons/Rectangle 5.svg" alt="" className="w-[66px] h-10" />
          <img src="/icons/chevron-down.svg" alt="" className="w-10 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;
