import { Tooltip } from '@ui/Tooltip';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export const SidebarItem: React.FC<{
  icon: IconProp;
  text: string;
  open: boolean;
  path: string;
}> = ({ icon, text, open, path }) => {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  return (
    <>
      <Tooltip text={text} open={openTooltip && !open} setOpen={setOpenTooltip}></Tooltip>
      <Link href={path} aria-label={text}>
        <div
          onMouseEnter={() => setOpenTooltip(true)}
          onMouseLeave={() => setOpenTooltip(false)}
          className={`flex h-10  items-center gap-3 rounded-md p-2.5 text-neutral-500 dark:text-white dark:hover:bg-primary hover:cursor-pointer hover:bg-hover hover:text-primary ${
            open ? '' : 'w-10 justify-center'
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
