import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`h-full p-3 bg-white rounded-xl ${open ? 'w-60' : 'w-16'} flex flex-col`}>
      <FontAwesomeIcon
        icon={faAnglesLeft}
        className='bg-neutral-100 text-neutral-500 h-3 w-3 rounded-full p-3'
        onClick={() => setOpen(!open)}
      ></FontAwesomeIcon>
      <SidebarItem text='Dashboard' icon={faHouse} open={open} />
    </div>
  );
};

const SidebarItem: React.FC<{ icon: IconProp; text: string; open: boolean }> = ({ icon, text, open }) => {
  return (
    <div className={`flex items-center gap-2 p-3 hover:text-[#613aeb] hover:bg-[#efebfe] hover:cursor-pointer rounded-md `}>
      <FontAwesomeIcon icon={icon} className='text-base' />
      <p className={`${open ? 'block' : 'hidden'} text-base`}>{text}</p>
    </div>
  );
};
