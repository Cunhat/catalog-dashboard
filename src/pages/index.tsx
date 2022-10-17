import React, { useState } from 'react';
import { DashboardLayout } from '@/components/Layouts';
import { NextPageWithLayout } from '@/types';
import { ReactElement } from 'react';
import { WidgetContainer } from '@/components/WidgetContainer';
import { Title } from '@/components/Typography/Title';
import { Text } from '@/components/Typography/Text';
import { TextInput } from '@/components/Inputs/TextInput';
import { TextArea } from '@/components/Inputs/TextArea';
import { Button } from '@/components/Button';
import { VersionIcon } from '@/components/VersionIcon';
import { RadioButtons } from '@/components/RadioButtons';
import { SmallWidget } from '@/components/WidgetContainer/SmallWidget';

const data = [
  {
    id: 'data1',
    label: 'No',
    value: 'no',
  },
  {
    id: 'data2',
    label: 'Yes',
    value: 'yes',
  },
];
const data1 = [
  {
    id: 'data11',
    label: 'No',
    value: 'no',
  },
  {
    id: 'data12',
    label: 'Yes',
    value: 'yes',
  },
];
const data2 = [
  {
    id: 'data21',
    label: 'Physical',
    value: 'physical',
  },
  {
    id: 'dta22',
    label: 'Virtual',
    value: 'Virtual',
  },
];
const data3 = [
  {
    id: 'data31',
    label: 'Free',
    value: 'free',
  },
  {
    id: 'data32',
    label: 'Restricted',
    value: 'restricted',
  },
];

const Home: NextPageWithLayout = () => {
  const [value, setValue] = useState('yes');
  const [value1, setValue1] = useState('yes');
  const [value2, setValue2] = useState('physical');
  const [value3, setValue3] = useState('free');

  const onChange = (value: any, setSelected: (value: string) => void) => {
    setSelected(value.target.value);
  };

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
            <div className='flex justify-between flex-wrap gap-2'>
              <SmallWidget>
                <div className='flex flex-col gap-2'>
                  <Title text='Serializable?' />
                  <RadioButtons setSelected={setValue} selected={value} data={data} onChange={onChange} name='radio_yes' />
                </div>
              </SmallWidget>
              <SmallWidget>
                <div className='flex flex-col gap-2'>
                  <Title text='Orderable?' />
                  <RadioButtons setSelected={setValue1} selected={value1} data={data1} onChange={onChange} name='radio_orderable' />
                </div>
              </SmallWidget>
              <SmallWidget>
                <div className='flex flex-col gap-2'>
                  <Title text='Object Type' />
                  <RadioButtons setSelected={setValue2} selected={value2} data={data2} onChange={onChange} name='radio_objType' />
                </div>
              </SmallWidget>
              <SmallWidget>
                <div className='flex flex-col gap-2 items-center'>
                  <Title text='Restrict option combis?' />
                  <RadioButtons setSelected={setValue3} selected={value3} data={data3} onChange={onChange} name='radio_combis' />
                </div>
              </SmallWidget>
            </div>
          </div>
        </WidgetContainer>
      </div>
      <div className='col-span-1 flex flex-col gap-3'>
        <WidgetContainer height='h-fit'>
          <div className='flex flex-col gap-3'>
            <Title text='Product Information' />
            <div className='flex items-center gap-2'>
              <VersionIcon color='primary' />
              <Text text='Product based on template XPTO' />
            </div>
            <div className='bg-neutral-500 h-[1px] opacity-30'></div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3 sm:grid-cols-1'>
              <div className=' flex flex-col gap-3'>
                <Text text='Version Number: 5' />
                <Text text='Creation Date: 2021-12-19' />
                <TextInput label='Start Date:' />
              </div>
              <div className=' flex flex-col gap-3'>
                <Text text='Version Number: 5' />
                <Text text='Creation Date: 2021-12-19' />
                <TextInput label='Start Date:' />
              </div>
            </div>
          </div>
        </WidgetContainer>
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
