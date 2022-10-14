import { DashboardLayout } from '@/components/Layouts';
import { NextPageWithLayout } from '@/types';
import { ReactElement } from 'react';
import { WidgetContainer } from '@/components/WidgetContainer';

const Home: NextPageWithLayout = () => {
  return (
    <div className='grid grid-cols-3 gap-4 h-full w-full max-w-screen-2xl'>
      <div className='col-span-2'>
        <WidgetContainer></WidgetContainer>
      </div>
      <div className='col-span-1 flex flex-col gap-3'>
        <WidgetContainer></WidgetContainer>
        <WidgetContainer></WidgetContainer>
        <WidgetContainer></WidgetContainer>
        <WidgetContainer></WidgetContainer>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
