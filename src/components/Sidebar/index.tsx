import React, { useState, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faAnglesLeft, faPlus, faSearch, faPencil } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { formatTitle } from '@/utils/utils';

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`h-full bg-white rounded-xl ${open ? 'w-60' : 'w-20'} flex flex-col gap-2 py-5`}>
      <div className=' flex justify-center'>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          className={`bg-neutral-100 text-neutral-500 h-3 w-3 rounded-full p-3 flex ${
            open ? 'ml-auto mr-3' : ''
          } hover:cursor-pointer hover:text-[#613aeb] hover:bg-[#efebfe]`}
          onClick={() => setOpen(!open)}
        ></FontAwesomeIcon>
      </div>

      <SidebarSection open={open}>
        <SidebarItem text='Dashboard' icon={faHouse} open={open} />
      </SidebarSection>
      <SidebarSeparator />
      <SidebarSection title='CATALOG MANAGEMENT' open={open}>
        <SidebarItem text='Create New Catalog' icon={faPlus} open={open} />
        <SidebarItem text='List Categories' icon={faSearch} open={open} />
        <SidebarItem text='Edit Existing Catalog' icon={faPencil} open={open} />
      </SidebarSection>
      <SidebarSeparator />
      <SidebarSection title='CATALOG COMPONENTS' open={open}>
        <SidebarItem text='Create New Catalog' icon={faPlus} open={open} />
        <SidebarItem text='List Categories' icon={faSearch} open={open} />
        <SidebarItem text='Edit Existing Catalog' icon={faPencil} open={open} />
      </SidebarSection>
      <SidebarSeparator />
      <SidebarSection title='PRODUCT DIMENSIONS' open={open}>
        <SidebarItem text='Create New Catalog' icon={faPlus} open={open} />
        <SidebarItem text='List Categories' icon={faSearch} open={open} />
        <SidebarItem text='Edit Existing Catalog' icon={faPencil} open={open} />
      </SidebarSection>
      <SidebarSection title='DATA REFERENCES' open={open}>
        <SidebarItem text='Create New Catalog' icon={faPlus} open={open} />
        <SidebarItem text='List Categories' icon={faSearch} open={open} />
        <SidebarItem text='Edit Existing Catalog' icon={faPencil} open={open} />
      </SidebarSection>
      <SidebarSection title='ADMINISTRATION' open={open}>
        <SidebarItem text='Create New Catalog' icon={faPlus} open={open} />
        <SidebarItem text='List Categories' icon={faSearch} open={open} />
        <SidebarItem text='Edit Existing Catalog' icon={faPencil} open={open} />
      </SidebarSection>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: IconProp; text: string; open: boolean }> = ({ icon, text, open }) => {
  return (
    <Link href={'/'}>
      <div
        className={`flex h-10  items-center gap-3 p-2.5 text-neutral-500 hover:text-[#613aeb] hover:bg-[#efebfe] hover:cursor-pointer rounded-md ${
          open ? '' : 'justify-center w-10'
        }`}
      >
        <FontAwesomeIcon icon={icon} className='text-base' />
        <span className={`${open ? 'block' : 'hidden'} text-sm`}>{text}</span>
      </div>
    </Link>
  );
};

const SidebarSeparator: React.FC = () => {
  return <div className='bg-neutral-100 h-[2px]'></div>;
};

type SidebarSectionProps = {
  title?: string;
  open: boolean;
};

const SidebarSection: React.FC<PropsWithChildren<SidebarSectionProps>> = ({ title, open, children }) => {
  return (
    <div className={`p-3 flex flex-col ${open ? '' : 'items-center'}`}>
      {title && <b className={`p-2.5 text-[#613aeb] text-[8px]`}>{formatTitle(title, open)}</b>}
      {children}
    </div>
  );
};
