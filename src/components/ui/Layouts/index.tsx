import { FC, PropsWithChildren, useEffect } from 'react';
import React from 'react';
import { Sidebar } from '@ui/Sidebar';
import { ActionBar } from '@ui/ActionBar';
import { Text } from '@ui/Typography/Text';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopoverMenu } from '@ui/PopoverMenu';
import { Toggle } from '@ui/Toggle';
import { useAtom, atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const darkModeAtom = atom(false);

//export const darkModeAtom = atomWithStorage('darkMode', false);

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // console.log(darkMode);
  }, [darkMode]);

  return (
    <div className='box-border flex h-screen flex-col bg-slate-100 dark:bg-dark-background'>
      <nav className='flex h-[50px] w-full bg-white shadow-lg items-center justify-end pr-5 gap-3 dark:bg-dark-widget'>
        <DarkThemeSwitcher />
        <FontAwesomeIcon icon={faBell} className='text-lg text-neutral-500 hover:cursor-pointer hover:text-primary' />
        <UserCard></UserCard>
      </nav>
      <div className='flex flex-1 gap-3 overflow-auto p-3'>
        <Sidebar />
        <main className='flex flex-1 flex-col gap-3'>
          <ActionBar />
          <div className='flex justify-center overflow-auto flex-1'>{children}</div>
        </main>
      </div>
    </div>
  );
};

const UserCard = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className='flex gap-3 hover:cursor-pointer hover:bg-hover py-1 px-3 rounded-md' onClick={() => setOpen(!open)}>
      <div className='rounded-full bg-hover p-[6px] flex justify-center items-center border border-primary'>
        <span className='text-sm text-primary font-bold m-0 p-0'>US</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-xs text-neutral-500 dark:text-white'>User Name</p>
      </div>
      {/* <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faChevronDown} className='text-sm text-neutral-500 hover:cursor-pointer hover:text-primary' />
      </div> */}
    </div>
  );
};

const DarkThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return <Toggle enabled={darkMode} setEnabled={() => setDarkMode(!darkMode)} />;
};
