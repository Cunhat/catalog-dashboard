import { faBell, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionBar } from '@ui/ActionBar';
import { Menu, type MenuElement } from '@ui/Menu';
import { Sidebar } from '@ui/Sidebar';
import { Toggle } from '@ui/Toggle';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const darkModeAtom = atomWithStorage('darkMode', false);

export const DashboardLayout: FC<PropsWithChildren<{ userInfo: any }>> = ({ children, userInfo }) => {
  const data: Array<MenuElement> = [
    {
      label: 'Log out',
      href: process.env.LOGOUT_URL!,
      type: 'link',
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
        <Menu userInfo={userInfo} data={data}></Menu>
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
