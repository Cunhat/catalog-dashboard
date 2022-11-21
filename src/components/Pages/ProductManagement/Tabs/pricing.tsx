import { Select } from '@ui/Select';
import { TextInput } from '@ui/Inputs/TextInput';

export const Pricing: React.FC = ({}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full grid grid-cols-12 grid-rows-3 gap-4'>
        <div className='col-span-2 row-start-1'>
          <Select label='Currency' />
        </div>
        <div className='col-span-3 row-start-1'>
          <Select label='Pricing Type' />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Standard Price' />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Min Sell Price' />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Max Sell Price' />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='In Plan Discount' />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard cost' />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard Gross Margin' />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard Net Margin' />
        </div>
      </div>
    </div>
  );
};
