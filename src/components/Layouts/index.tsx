import { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Sidebar } from '@/components/Sidebar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col h-screen'>
     <nav className='bg-indigo-500 h-[100px]'></nav>
    <div className='flex flex-1'>
      <div className='bg-red-400 h-full p-3'>
        <Sidebar />
      </div>
      <main className='bg-slate-500 flex flex-1 flex-wrap gap-3'>{children}</main>
    </div>
  </div>
);
