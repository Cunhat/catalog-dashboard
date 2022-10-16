import { PropsWithChildren } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const teste = [
  {
    id: '1',
    label: 'teste',
    value: 'teste',
  },
  {
    id: '2',
    label: 'teste2',
    value: 'teste2',
  },
];

export const RadioButtons: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div></div>
    // <div className='flex w-full relative'>
    //   <input type='radio' id='option0' name='tabs' className='appearance-none' />
    //   <label
    //     for='option0'
    //     className='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
    //   >
    //     OPTION 0
    //   </label>

    //   <input type='radio' id='option1' name='tabs' className='appearance-none' />
    //   <label
    //     for='option1'
    //     className='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
    //   >
    //     OPTION 1
    //   </label>

    //   <input type='radio' id='option2' name='tabs' className='appearance-none' />
    //   <label
    //     for='option2'
    //     className='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
    //   >
    //     OPTION 2
    //   </label>

    //   <input type='radio' id='option3' name='tabs' className='appearance-none' />
    //   <label
    //     for='option3'
    //     className='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
    //   >
    //     OPTION 3
    //   </label>

    //   <input type='radio' id='option4' name='tabs' className='appearance-none' />
    //   <label
    //     for='option4'
    //     className='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
    //   >
    //     OPTION 4
    //   </label>

    //   <div className='w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-indigo-600 absolute transform transition-transform tabAnim'></div>
    // </div>
  );
};

// {teste.map((item) => (
//   <RadioGroup.Item value={item.value} id={item.id} className='w-10 h-10 bg-white border border-neutral-500'>
//     <RadioGroup.Indicator className='w-full h-full justify-center items-center after:bg-violet-500 bg-pink-300'>
//       {item.label}
//     </RadioGroup.Indicator>
//   </RadioGroup.Item>
// ))}
