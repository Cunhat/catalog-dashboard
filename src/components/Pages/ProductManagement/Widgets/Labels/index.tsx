import { Tag } from '@ui/Tag';
import { Title } from '@ui/Typography/Title';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import React from 'react';

export const Labels: React.FC = ({}) => (
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
);
