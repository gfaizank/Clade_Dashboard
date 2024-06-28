import React from 'react';
import Button from './Button';
import trashIcon from '../assets/trash-03.png';
import editIcon from '../assets/Icon.png';
import usersIcon from '../assets/users.png';
import userIcon from '../assets/user.png';
import messageIcon from '../assets/messag.png';
import eyeIcon from '../assets/eye.png';


interface DataItem {
  id: number;
  name: string;
  count: number;
  icon: string;
}

const data: DataItem[] = [
  { id: 1, name: "Applicants", count: 400, icon: usersIcon },
  { id: 2, name: "Approved", count: 120, icon: userIcon },
  { id: 3, name: "Pending", count: 80, icon: messageIcon },
  { id: 4, name: "Rejected", count: 50, icon: eyeIcon }
];

const Sidebar: React.FC = () => {
  return (
    <div className='h-[1180px] bg-[#FCFCFC] w-[25vw] z-50 border border-l-4 border-[#E7E7E7] absolute right-0'>
      <div className='w-[360px] h-[361px] flex flex-col'>
        <div className='flex flex-row items-center'>
          <Button name="Delete job" icon={trashIcon} bgColor="bg-[#FEF4F2]" textColor="text-[#DC4A2D]" />
          <Button name="Edit job" icon={editIcon} bgColor="bg-[#DC4A2D]" textColor="text-[#FFFFFF]" />
        </div>
        <div className='flex flex-col px-2 mt-8'>
          {data.map(item => (
            <div key={item.id} className='flex flex-row items-center justify-between mx-6 py-4 border-b-2'>
              <div className='flex flex-row items-center'>
                <img src={item.icon} alt={`${item.name} Icon`} className='text-[#4F4F4F] w-4 h-4 mt-[2px]' />
                <p className='text-[#4F4F4F] text-base ml-3'>{item.name}</p>
              </div>
              <h1 className='font-semibold'>{item.count}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
