import React, { useState, PropsWithChildren, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faAnglesLeft, faPlus, faSearch, faPencil, faMinus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { formatTitle } from '@/utils/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '@/components/Tooltip';
import { PopoverMenu } from '@/components/PopoverMenu';

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        initial='collapsed'
        animate={{
          width: open ? '240px' : '85px',
          transition: { duration: 0.5, type: 'spring', when: 'afterChildren' },
        }}
        className={`h-full bg-white rounded-xl flex flex-col py-5 overflow-auto shadow-2xl`}
      >
        <div className=' flex justify-center'>
          <motion.div
            className={`${open ? 'ml-auto mr-3' : ''}`}
            animate={{
              rotate: open ? 0 : 180,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <FontAwesomeIcon
              icon={faAnglesLeft}
              className={`bg-neutral-100 text-neutral-500 h-3 w-3 rounded-full p-3 flex  hover:cursor-pointer hover:text-[#613aeb] hover:bg-[#efebfe]`}
              onClick={() => setOpen(!open)}
            ></FontAwesomeIcon>
          </motion.div>
        </div>

        <SidebarSection open={open}>
          <SidebarItem text='Dashboard' icon={faHouse} open={open} />
        </SidebarSection>
        <SidebarSeparator />
        <SidebarSection title='CATALOG MANAGEMENT' open={open}>
          {/* <SidebarItem text='Create New Catalog' icon={faPlus} open={open} /> */}
          <SidebarExpandableItem text='Create New Catalog' icon={faPlus} open={open} />
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
      </motion.div>
    </AnimatePresence>
  );
};

const SidebarItem: React.FC<{ icon: IconProp; text: string; open: boolean }> = ({ icon, text, open }) => {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  return (
    <>
      <Tooltip text={text} open={openTooltip && !open} setOpen={setOpenTooltip}></Tooltip>
      <Link href={'/'}>
        <div
          onMouseEnter={() => setOpenTooltip(true)}
          onMouseLeave={() => setOpenTooltip(false)}
          className={`flex h-10  items-center gap-3 p-2.5 text-neutral-500 hover:text-[#613aeb] hover:bg-[#efebfe] hover:cursor-pointer rounded-md ${
            open ? '' : 'justify-center w-10'
          }`}
        >
          <FontAwesomeIcon icon={icon} className='text-base' />
          <motion.span
            animate={{ opacity: open ? 1 : 0, transition: { duration: 0.5 } }}
            className={`${open ? 'block' : 'hidden'} text-sm`}
          >
            {text}
          </motion.span>
        </div>
      </Link>
    </>
  );
};

const PopoverComp: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void; text: string; icon: IconProp }> = ({
  open,
  onOpenChange,
  text,
  icon,
}) => {
  return (
    <PopoverMenu open={open} onOpenChange={onOpenChange}>
      <div
        className='flex h-10  items-center gap-3 p-2.5 
          bg-[#613aeb] text-white rounded-t-md
        hover:cursor-pointer'
      >
        <FontAwesomeIcon icon={icon} className='text-base' />
        <span className={`text-sm`}>{text}</span>
      </div>
      <div className='px-2.5 py-3 bg-[#efebfe] flex flex-col rounded-b-md gap-3'>
        <ExpandableItem text='List Products' />
        <ExpandableItem text='Create New Product' />
        <ExpandableItem text='Edit Product' />
        <ExpandableItem text='Configuration Allowed Combos' />
        <ExpandableItem text='Pricing' />
      </div>
    </PopoverMenu>
  );
};

const SidebarExpandableItem: React.FC<{ icon: IconProp; text: string; open: boolean }> = ({ icon, text, open }) => {
  const [showItems, setShowItems] = useState<boolean>(false);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const expandItem = () => {
    if (open) setShowItems(!showItems);
  };

  React.useEffect(() => {
    if (!open) setShowItems(false);
  }, [open]);

  console.log(openMenu)

  return (
    <>
      <Tooltip text={text} open={openTooltip && !open} setOpen={setOpenTooltip}></Tooltip>
      <PopoverComp open={openMenu && !open} onOpenChange={setOpenMenu} text={text} icon={icon} />
      <div onClick={() => setOpenMenu(!openMenu && !open)} onMouseEnter={() => setOpenTooltip(true)} onMouseLeave={() => setOpenTooltip(false)}>
        <div
          onClick={expandItem}
          className={`flex h-10  items-center gap-3 p-2.5 text-neutral-500 ${
            showItems ? 'bg-[#613aeb] text-white rounded-t-md' : ' hover:text-[#613aeb] hover:bg-[#efebfe] rounded-md'
          } hover:cursor-pointer  ${open ? '' : 'justify-center w-10'} `}
        >
          <FontAwesomeIcon icon={icon} className='text-base' />
          <motion.span
            animate={{ opacity: open ? 1 : 0, transition: { duration: 0.5 } }}
            className={`${open ? 'block' : 'hidden'} text-sm`}
          >
            {text}
          </motion.span>
          {!open ? (
            <></>
          ) : showItems ? (
            <FontAwesomeIcon icon={faMinus} className='text-[10px] ml-auto'></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faPlus} className='text-[10px] ml-auto' />
          )}
        </div>
        {/* <AnimatePresence initial={false} mode='wait'> */}
        {showItems && open && (
          <motion.div
            className='px-2.5 py-3 bg-[#efebfe] flex flex-col rounded-b-md gap-3'
            key='expandItem'
            initial='initial'
            animate='open'
            exit='collapsed'
            variants={{
              open: {
                height: 'auto',
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.05,
                  },
                },
              },
              collapsed: {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              },
              initial: { height: 0, opacity: 0 },
            }}
          >
            <ExpandableItem text='List Products' />
            <ExpandableItem text='Create New Product' />
            <ExpandableItem text='Edit Product' />
            <ExpandableItem text='Configuration Allowed Combos' />
            <ExpandableItem text='Pricing' />
          </motion.div>
        )}
        {/* </AnimatePresence> */}
      </div>
    </>
  );
};

const ExpandableItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Link href={'/'}>
      <span className={`text-sm text-neutral-500 hover:text-[#613aeb] hover:cursor-pointer`}>{text}</span>
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
  const AnimatedTitle: React.FC<{ text: string }> = ({ text }) => (
    <motion.b
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`p-2.5 text-[#613aeb] text-[8px]`}
    >
      {text}
    </motion.b>
  );

  return (
    <div className={`p-3 flex flex-col ${open ? '' : 'items-center'}`}>
      {open && title && <AnimatedTitle text={title} />}
      {!open && title !== undefined && <AnimatedTitle text={formatTitle(title, open)!} />}
      {children}
    </div>
  );
};
