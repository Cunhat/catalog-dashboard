import React, { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@ui/Button';
import { Text } from '@ui/Typography/Text';
import { Title } from '@ui/Typography/Title';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import { Separator } from '@ui/Separator';
import { Modal } from '@ui/Modal';
import { TextArea } from '@ui/Inputs/TextArea';

export const Comments: React.FC = ({}) => {
  const [openComments, setOpenComments] = useState(false);
  return (
    <>
      <Modal open={openComments}>
        <div className='flex flex-col gap-5 w-[300px]'>
          <Title text='Add comments' />
          <TextArea label='' />
          <div className='flex gap-2 ml-auto'>
            <Button text='Add' type='small' onClick={() => setOpenComments(false)} />
            <Button text='Cancel' type='small' onClick={() => setOpenComments(false)} />
          </div>
        </div>
      </Modal>
      <WidgetContainer height='h-fit'>
        <InnerContainer>
          <Title text='Comments' />
          <Button leftIcon={faCheck} onClick={() => setOpenComments(!openComments)} text='New Comment' type='small' />
          <Separator />
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <Text text='User: Francisco Guilherme' />
              <Text text='Date: 2021-12-23 10:00:002' />
            </div>
            <Text text='Will show two window one is query other is graphical window so you can add the table' />
          </div>
        </InnerContainer>
      </WidgetContainer>
    </>
  );
};
