import React, { useState, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`h-full bg-white rounded-xl ${open ? 'w-60' : 'w-18'} flex flex-col gap-2`}>
      <SidebarSection>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          className={`bg-neutral-100 text-neutral-500 h-3 w-3 rounded-full p-3 flex ${
            open ? 'ml-auto' : ''
          } hover:cursor-pointer hover:text-[#613aeb] hover:bg-[#efebfe]`}
          onClick={() => setOpen(!open)}
        ></FontAwesomeIcon>
      </SidebarSection>
      <SidebarSection>
        <SidebarItem text='Dashboard' icon={faHouse} open={open} />
      </SidebarSection>
      <SidebarSeparator />
      <SidebarSection title='MANAGEMENT'>
        <SidebarItem text='Create New Catalog' icon={faHouse} open={open} />
      </SidebarSection>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: IconProp; text: string; open: boolean }> = ({ icon, text, open }) => {
  return (
    <Link href={'/'}>
      <div
        className={`flex h-10 items-center gap-3 p-2.5 text-neutral-500 hover:text-[#613aeb] hover:bg-[#efebfe] hover:cursor-pointer rounded-md`}
      >
        <FontAwesomeIcon icon={icon} className='text-base ' />
        <span className={`${open ? 'block' : 'hidden'} text-base`}>{text}</span>
      </div>
    </Link>
  );
};

const SidebarSeparator: React.FC = () => {
  return <div className='bg-neutral-100 h-[2px]'></div>;
};

type SidebarSectionProps = {
  title?: string;
};

const SidebarSection: React.FC<PropsWithChildren<SidebarSectionProps>> = ({ title, children }) => {
  return (
    <div className='p-3'>
      {/* {title && <b className={`p-2.5 text-neutral-500 text-[8px]`}>{title}</b>} */}
      {children}
    </div>
  );
};
