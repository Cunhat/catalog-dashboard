import type { NextPage } from 'next';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '@/types';
import { DashboardLayout } from '@/components/Layouts';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className='h-[200px] w-[400px] bg-indigo-500'></div>
      <div className='h-[200px] w-[400px] bg-indigo-500'></div>
     
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
