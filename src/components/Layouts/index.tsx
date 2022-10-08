import { FC, PropsWithChildren } from 'react';
import React from 'react';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col h-screen bg-black'>
    <div className='bg-indigo-500 h-[100px]'></div>
    <div className='flex h-full'>
      <div className='bg-red-400 h-full p-3'>
        <div className='h-full w-[300px] bg-violet-500'></div>
      </div>
      <main className='bg-slate-500 flex flex-1 flex-wrap gap-3'>{children}</main>
    </div>
  </div>
);
