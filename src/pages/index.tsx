import { DashboardLayout } from '@/components/Layouts';
import { NextPageWithLayout } from '@/types';
import { ReactElement } from 'react';
import { WidgetContainer } from '@/components/WidgetContainer';
import { Title } from '@/components/Typography/Title';
import { TextInput } from '@/components/Inputs/TextInput';
import { TextArea } from '@/components/Inputs/TextArea';
import { Button } from '@/components/Button';

const Home: NextPageWithLayout = () => {
  return (
    <div className='grid grid-cols-3 gap-4 h-full w-full max-w-screen-2xl'>
      <div className='col-span-2'>
        <WidgetContainer>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
              <Title text='Product Definition' />
              <Button text='Save' />
            </div>

            <TextInput label='Product Name' />
            <div className='grid grid-cols-4 gap-3'>
              <div className='col-span-1'>
                <TextInput label='Product Code' />
              </div>
              <div className='col-span-1'>
                <TextInput label='Model Code' />
              </div>
              <div className='col-span-2'>
                <TextInput label='Model Description' />
              </div>
            </div>
            <TextArea label='Product Description' />
            <TextArea label='Comments' />
            <div className='grid grid-cols-2 gap-3'>
              <TextInput label='Commercial Launch Date' />
              <TextInput label='Supplier' />
            </div>
          </div>
        </WidgetContainer>
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

{
  /* <div className='flex'>
<div className='w-1/2 flex'>
  <div className='w-1/2'>
    <TextInput label='Product Name' />
  </div>
  <div className='w-1/2'>
    <TextInput label='Product Name' />
  </div>
</div> */
}
{
  /* <div className='flex-1'><TextInput label='Product Name' /></div> */
}
{
  /* </div> */
}
