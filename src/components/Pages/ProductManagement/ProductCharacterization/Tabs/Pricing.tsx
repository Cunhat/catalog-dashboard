import { Select } from '@ui/Select';
import { TextInput } from '@ui/Inputs/TextInput';

export const Pricing: React.FC<{ editMode: boolean }> = ({ editMode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full grid grid-cols-12 grid-rows-3 gap-4'>
        <div className='col-span-2 row-start-1'>
          <Select label='Currency' editMode={editMode} />
        </div>
        <div className='col-span-3 row-start-1'>
          <Select label='Pricing Type' editMode={editMode} />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Standard Price' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Min Sell Price' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='Max Sell Price' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-2'>
          <TextInput label='In Plan Discount' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard cost' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard Gross Margin' isEditing={editMode} />
        </div>
        <div className='col-span-3 row-start-3'>
          <TextInput label='Standard Net Margin' isEditing={editMode} />
        </div>
      </div>
    </div>
  );
};
