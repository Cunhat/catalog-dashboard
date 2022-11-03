import { Title } from '@ui/Typography/Title';
import { TextInput } from '@ui/Inputs/TextInput';
import { Select } from '@ui/Select';

export const Details: React.FC<{}> = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Title text='Object Dimensions' />
      <div className='grid grid-cols-4 grid-rows-2 gap-3'>
        <div className='col-start-1 col-span-1'>
          <Select label='Unit Systems' />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label='Item Height' />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label='Item Length' />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label='Item Weight' />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label='Item Width' />
        </div>
      </div>
      <Title text='Product Lifecycle' />
      <div className='grid grid-cols-4 gap-3'>
        <TextInput label='Duration after activation' />
        <TextInput label='Units' />
      </div>
    </div>
  );
};
