import { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Sidebar } from '@/components/Sidebar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col h-screen bg-slate-100'>
    <nav className='bg-indigo-500 h-[50px] flex justify-center items-center'>TOP BAR SECTION</nav>
    <div className='flex flex-1'>
      <div className=' h-full p-3'>
        <Sidebar />
      </div>
      <main className='flex flex-1 flex-wrap gap-3 p-10'>{children}</main>
    </div>
  </div>
);
