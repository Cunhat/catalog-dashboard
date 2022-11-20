import { DatePicker } from '@ui/DatePicker';
import { Text } from '@ui/Typography/Text';
import { Title } from '@ui/Typography/Title';
import { VersionIcon } from '@ui/VersionIcon';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import React from 'react';
import { Separator } from '@ui/Separator';

export const ProductInformation: React.FC = ({}) => {
  return (
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
            <DatePicker label='Start Date:' />
          </div>
          <div className=' flex flex-col gap-3'>
            <Text text='Version Number: 5' />
            <Text text='Creation Date: 2021-12-19' />
            <DatePicker label='End Date:' />
          </div>
        </div>
      </InnerContainer>
    </WidgetContainer>
  );
};
