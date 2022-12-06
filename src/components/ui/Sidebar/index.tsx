import React, { PropsWithChildren, useState } from 'react';
import { SideBarRoutes } from '@/utils/routes';
import { formatTitle } from '@/utils/utils';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { SidebarExpandableItem } from './SidebarExpandableItem';
import { SidebarItem } from './SidebarItem';
import { useTranslation } from 'next-i18next';

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { t } = useTranslation();
  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        initial='collapsed'
        animate={{
          width: open ? '250px' : '102px',
          transition: { duration: 0.5, type: 'spring', when: 'afterChildren' },
        }}
        className={`flex h-full flex-col overflow-y-auto rounded-xl bg-white py-5 shadow-sm dark:bg-dark-widget`}
      >
        <div className='flex justify-center'>
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
              className={`flex text-xs rounded-full bg-neutral-100 p-3 text-neutral-500  hover:cursor-pointer hover:bg-hover hover:text-primary dark:bg-neutral-500 dark:text-white`}
              onClick={() => setOpen(!open)}
            ></FontAwesomeIcon>
          </motion.div>
        </div>
        {SideBarRoutes.map((route, index) => {
          return (
            <div key={index}>
              <SidebarSection open={open} title={route?.sectionName} key={'section' + route?.id}>
                {route.items.map((item) => {
                  if (item.type === 'link')
                    return (
                      <SidebarItem
                        path={item.path}
                        key={'section' + route?.id + 'sidebarItem' + item.id}
                        text={t(item.label)}
                        icon={item.icon}
                        open={open}
                      />
                    );
                  return (
                    <SidebarExpandableItem
                      label={t(item.label)}
                      icon={item.icon}
                      open={open}
                      subPaths={item.subPaths}
                      key={'section' + route?.id + 'expandableItem' + item.id}
                    />
                  );
                })}
              </SidebarSection>
              {index !== SideBarRoutes.length - 1 && <Separator key={(route?.sectionName ?? 'noname') + index + 'separator'} />}
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export const Separator: React.FC = () => {
  return <div className='h-[2px] bg-neutral-100 dark:bg-neutral-500'></div>;
};

type SidebarSectionProps = {
  title?: string;
  open: boolean;
};

const SidebarSection: React.FC<PropsWithChildren<SidebarSectionProps>> = ({ title, open, children }) => {
  const { t } = useTranslation();
  const AnimatedTitle: React.FC<{ text: string }> = ({ text }) => (
    <motion.b
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`p-2.5 text-[8px] text-primary `}
    >
      {text}
    </motion.b>
  );

  return (
    <div className={`flex flex-col p-3 ${open ? '' : 'items-center'}`}>
      {open && title && <AnimatedTitle text={t(title)} />}
      {!open && title !== undefined && <AnimatedTitle text={formatTitle(t(title), open)!} />}
      {children}
    </div>
  );
};
