import { PopoverMenu } from '@ui/PopoverMenu';
import { Tooltip } from '@ui/Tooltip';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { SidebarDropdownItem } from '@/utils/routes';
import { useTranslation } from 'next-i18next';

type SidebarExpandableItemProps = Omit<SidebarDropdownItem, 'type' | 'id'> & {
  open: boolean;
};

export const SidebarExpandableItem: React.FC<SidebarExpandableItemProps> = ({ icon, label, open, subPaths }) => {
  const [showItems, setShowItems] = useState<boolean>(false);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const expandItem = () => {
    if (open) setShowItems(!showItems);
  };

  React.useEffect(() => {
    if (!open) setShowItems(false);
  }, [open]);

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
          className={`flex h-10  items-center gap-3 p-2.5  ${
            showItems
              ? 'rounded-t-md bg-primary text-white'
              : 'text-neutral-500 dark:text-white rounded-md hover:bg-hover hover:text-primary dark:hover:bg-primary'
          } hover:cursor-pointer  ${open ? '' : 'w-10 justify-center'} `}
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
            <FontAwesomeIcon icon={faMinus} className='ml-auto text-[10px]'></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faPlus} className='ml-auto text-[10px]' />
          )}
        </div>
        <AnimatePresence initial={false} mode='wait'>
          {showItems && open && (
            <motion.div
              className='flex h-auto flex-col gap-3 rounded-b-md bg-hover  px-2.5 py-3'
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
                <ExpandableItem text={t(subPath.label)} key={subPath.label + index} />
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
    <Link href={'/'} aria-label={text}>
      <AnimatePresence>
        <motion.span
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: delayAnimation ? 0.25 : 0 }}
          className={`text-sm text-neutral-500 hover:cursor-pointer hover:text-primary `}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </Link>
  );
};

const PopoverComp: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void } & Omit<SidebarDropdownItem, 'type' | 'id'>> = ({
  open,
  onOpenChange,
  label,
  icon,
  subPaths,
}) => {
  const { t } = useTranslation();
  return (
    <PopoverMenu open={open} side='right' onOpenChange={onOpenChange} sideOffset={20}>
      <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
        <div
          className='flex h-10  items-center gap-3 rounded-t-md 
            bg-primary p-2.5 text-white
          shadow-xl hover:cursor-pointer'
        >
          <FontAwesomeIcon icon={icon} className='text-base' />
          <span className={`text-sm`}>{label}</span>
        </div>
        <div className='flex flex-col gap-3 rounded-b-md bg-hover px-2.5 py-3'>
          {subPaths.map((subPath, index) => (
            <ExpandableItem delayAnimation={false} key={subPath.label + index} text={t(subPath.label)} />
          ))}
        </div>
      </motion.div>
    </PopoverMenu>
  );
};
