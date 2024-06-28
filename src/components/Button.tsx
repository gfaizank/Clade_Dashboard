
import React from 'react';

interface ButtonProps {
  name: string;
  icon: string;
  bgColor: string; 
  textColor: string; 
}

const Button: React.FC<ButtonProps> = ({ name, icon, bgColor, textColor }) => {
  return (
    <div className={`flex flex-row gap-[10px] mt-8 ml-3 items-center justify-center ${bgColor} py-3 px-4 w-[162px] rounded-lg border`}>
      <img src={icon} alt={name} className={`${textColor}`} />
      <span className={textColor}>{name}</span>
    </div>
  );
};

export default Button;