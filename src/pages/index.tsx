import React, { PropsWithChildren, useState } from 'react';
import { DashboardLayout } from '@/components/Layouts';
import { NextPageWithLayout } from '@/types';
import { ReactElement } from 'react';
import { WidgetContainer, InnerContainer } from '@/components/WidgetContainer';
import { Title } from '@/components/Typography/Title';
import { Text } from '@/components/Typography/Text';
import { TextInput } from '@/components/Inputs/TextInput';
import { TextArea } from '@/components/Inputs/TextArea';
import { Button } from '@/components/Button';
import { VersionIcon } from '@/components/VersionIcon';
import { RadioButtons } from '@/components/RadioButtons';
import { SmallWidget } from '@/components/WidgetContainer/SmallWidget';
import { Tag } from '@/components/Tag';

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
          <InnerContainer>
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
          </InnerContainer>
        </WidgetContainer>
      </div>
      <div className='col-span-1 flex flex-col gap-3'>
        <WidgetContainer height='h-fit'>
          <InnerContainer>
            <Title text='Product Information' />
            <div className='flex items-center gap-2'>
              <VersionIcon type='primary' />
              <Text text='Product based on template XPTO' />
            </div>
            <Separator />
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
          </InnerContainer>
        </WidgetContainer>
        <WidgetContainer height='h-fit'>
          <InnerContainer>
            <Title text='Labels' />
            <div className='flex gap-2 flex-wrap border border-neutral-300 rounded-2xl px-2 py-1'>
              <Tag text='New offer' />
              <Tag text='Retention' />
              <Tag text='Test Big text' />
            </div>
          </InnerContainer>
        </WidgetContainer>
        <WidgetContainer height='h-fit'>
          <InnerContainer>
            <Title text='Version History' />
            <div className='flex gap-2 items-center'>
              <VersionIcon type='primary' />
              <Text text='Version 1 - Archived' />
            </div>
            <Separator></Separator>
            <div className='flex gap-2 items-center'>
              <VersionIcon type='primary' />
              <Text text='Version 2 - Published - Retired' />
            </div>
            <Separator></Separator>
            <div className='flex gap-2 items-center'>
              <VersionIcon type='primary' />
              <Text text='Version 3 - Published - Active' />
            </div>
            <Separator></Separator>
            <div className='flex gap-2 items-center'>
              <VersionIcon type='primary' />
              <Text text='Version 4 - Published - Scheduled' />
            </div>
            <Separator></Separator>
            <div className='flex gap-2 items-center mb-2'>
              <VersionIcon type='green' />
              <Text text='Version 5 - Designed' color='text-green-500' />
            </div>
          </InnerContainer>
        </WidgetContainer>
        <WidgetContainer></WidgetContainer>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;

const Separator: React.FC = () => <div className='bg-neutral-500 h-[1px] opacity-30'></div>;
