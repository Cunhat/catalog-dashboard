import { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ActionBar } from '@/components/ActionBar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='box-border flex h-screen flex-col bg-slate-100'>
    <nav className='flex h-[50px] w-full items-center justify-center'>TOP BAR SECTION</nav>
    <div className='flex flex-1 gap-3 p-3 overflow-auto'>
      <Sidebar />
      <main className='flex flex-1 flex-col gap-3'>
        <ActionBar />
        <div className='flex  flex-wrap gap-3 justify-center overflow-auto flex-1'>{children}</div>
      </main>
    </div>
  </div>
);
