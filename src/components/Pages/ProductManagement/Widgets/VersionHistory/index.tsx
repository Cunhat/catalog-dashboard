import { Text } from '@ui/Typography/Text';
import { Title } from '@ui/Typography/Title';
import { VersionIcon } from '@ui/VersionIcon';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import React from 'react';
import { Separator } from '@ui/Separator';

export const VersionHistory: React.FC = ({}) => (
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
);
