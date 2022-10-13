import React, { useState, PropsWithChildren, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAnglesLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { formatTitle } from '@/utils/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '@/components/Tooltip';
import { PopoverMenu } from '@/components/PopoverMenu';
import { SideBarRoutes, SidebarDropdownItem } from '@/utils/routes';

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
        {SideBarRoutes.map((route, index) => {
          return (
            <>
              <SidebarSection open={open} title={route?.sectionName} key={(route?.sectionName || 'noname') + index}>
                {route.items.map((item) => {
                  if (item.type === 'link') return <SidebarItem key={item.label} text={item.label} icon={item.icon} open={open} />;
                  return <SidebarExpandableItem label={item.label} icon={item.icon} open={open} subPaths={item.subPaths} />;
                })}
              </SidebarSection>
              <SidebarSeparator />
            </>
          );
        })}
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

const PopoverComp: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void } & Omit<SidebarDropdownItem, 'type'>> = ({
  open,
  onOpenChange,
  label,
  icon,
  subPaths,
}) => {
  return (
    <PopoverMenu open={open} onOpenChange={onOpenChange}>
      <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
        <div
          className='flex h-10  items-center gap-3 p-2.5 
          bg-[#613aeb] text-white rounded-t-md
        hover:cursor-pointer shadow-xl'
        >
          <FontAwesomeIcon icon={icon} className='text-base' />
          <span className={`text-sm`}>{label}</span>
        </div>
        <div className='px-2.5 py-3 bg-[#efebfe] flex flex-col rounded-b-md gap-3'>
          {subPaths.map((subPath, index) => (
            <ExpandableItem delayAnimation={false} key={subPath.label + index} text={subPath.label} />
          ))}
        </div>
      </motion.div>
    </PopoverMenu>
  );
};

type SidebarExpandableItemProps = Omit<SidebarDropdownItem, 'type'> & { open: boolean };

const SidebarExpandableItem: React.FC<SidebarExpandableItemProps> = ({ icon, label, open, subPaths }) => {
  const [showItems, setShowItems] = useState<boolean>(false);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const expandItem = () => {
    if (open) setShowItems(!showItems);
  };

  React.useEffect(() => {
    if (!open) setShowItems(false);
  }, [open]);

  console.log(openMenu);

  return (
    <>
      <Tooltip text={label} open={openTooltip && !open} setOpen={setOpenTooltip}></Tooltip>
      <PopoverComp open={openMenu && !open} onOpenChange={setOpenMenu} label={label} icon={icon} subPaths={subPaths} />
      <div
        onClick={() => setOpenMenu(!openMenu && !open)}
        onMouseEnter={() => setOpenTooltip(true)}
        onMouseLeave={() => setOpenTooltip(false)}
      >
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
            {label}
          </motion.span>
          {!open ? (
            <></>
          ) : showItems ? (
            <FontAwesomeIcon icon={faMinus} className='text-[10px] ml-auto'></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faPlus} className='text-[10px] ml-auto' />
          )}
        </div>
        <AnimatePresence initial={false} mode='wait'>
          {showItems && open && (
            <motion.div
              className='px-2.5 py-3 bg-[#efebfe] flex flex-col rounded-b-md gap-3 h-auto'
              key='expandItem'
              initial='initial'
              animate='open'
              exit='collapsed'
              layout
              variants={{
                open: {
                  height: 'auto',
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.3,
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
                      duration: 0.3,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                },
                initial: { height: 0, opacity: 0 },
              }}
            >
              {subPaths.map((subPath, index) => (
                <ExpandableItem text={subPath.label} key={subPath.label + index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const ExpandableItem: React.FC<{ text: string; delayAnimation?: boolean }> = ({ text, delayAnimation = true }) => {
  return (
    <Link href={'/'}>
      <AnimatePresence>
        <motion.span
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: delayAnimation ? 0.25 : 0 }}
          className={`text-sm text-neutral-500 hover:text-[#613aeb] hover:cursor-pointer`}
        >
          {text}
        </motion.span>
      </AnimatePresence>
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
