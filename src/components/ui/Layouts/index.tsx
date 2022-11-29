import { FC, PropsWithChildren, useEffect, useState } from 'react';
import React from 'react';
import { Sidebar } from '@ui/Sidebar';
import { ActionBar } from '@ui/ActionBar';
import { Text } from '@ui/Typography/Text';
import { faBell, faChevronDown, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopoverMenu } from '@ui/PopoverMenu';
import { Toggle } from '@ui/Toggle';
import { useAtom, atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Menu, type MenuElement } from '@ui/Menu';
import { signOut } from 'next-auth/react';
import { Toaster, ToastBar } from 'react-hot-toast';

//export const darkModeAtom = atom(false);

export const darkModeAtom = atomWithStorage('darkMode', false);

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const data: Array<MenuElement> = [
    {
      label: 'Log out',
      href: process.env.LOGOUT_URL!,
      type: 'link',
      //onClick: () => signOut(),
      icon: faRightFromBracket,
    },
    {
      label: 'User settings',
      href: '/settings',
      type: 'link',
      icon: faGear,
    },
  ];

  return (
    <div className='box-border flex h-screen flex-col bg-slate-100 dark:bg-dark-background'>
      <Toaster position='top-right' reverseOrder></Toaster>
      <nav className='flex h-[50px] w-full bg-white shadow-lg items-center justify-end pr-5 gap-3 dark:bg-dark-widget'>
        <DarkThemeSwitcher />
        <FontAwesomeIcon icon={faBell} className='text-lg text-neutral-500 hover:cursor-pointer hover:text-primary' />
        <Menu data={data}></Menu>
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

const DarkThemeSwitcher: React.FC<{}> = ({}) => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setCanRender(true);
  }, [darkMode]);

  if (!canRender) return null;

  return <Toggle enabled={darkMode} setEnabled={() => setDarkMode(!darkMode)} />;
};
