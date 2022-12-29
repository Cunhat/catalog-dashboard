import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '@ui/Typography/Text';
import ContentLoader from 'react-content-loader';

const data = ['Metric', 'Imperial'];

export const Select: React.FC<{ label: string; editMode: boolean }> = ({ label, editMode = false }) => {
  const [selectedData, setSelectedData] = useState(data[0]);

  return (
    <Listbox as='div' className='' value={selectedData} onChange={setSelectedData}>
      {({ open }) => (
        <>
          <Listbox.Label className='text-sm text-neutral-500 dark:text-white'>{label}</Listbox.Label>
          {editMode ? (
            <div className='relative'>
              <span className='inline-block w-full rounded-md'>
                <Listbox.Button className='cursor-default relative w-full text-sm text-neutral-500 rounded-md border border-neutral-300 bg-white dark:bg-dark-widget dark:text-white py-1 px-2 pr-6 text-left focus:outline-none focus:shadow-outline-blue focus:border-primary transition ease-in-out duration-150'>
                  <span className='block truncate'>{selectedData}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none top-1/2 transform -translate-y-1/2'
                  />
                </Listbox.Button>
              </span>

              <Transition
                show={open}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                className='absolute mt-1 w-full rounded-md bg-white shadow-lg dark:bg-dark-drops'
              >
                <Listbox.Options static className='max-h-60 rounded-md py-1 leading-6 shadow-xs overflow-auto focus:outline-none text-sm'>
                  {data.map((elem) => (
                    <Listbox.Option key={elem} value={elem}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active ? 'text-white bg-primary' : 'text-neutral-500 dark:text-white'
                          } cursor-default select-none relative py-1 pl-3 pr-4`}
                        >
                          <span className={`${selected ? (active ? 'text-white' : 'text-primary') : ''} block truncate`}>{elem}</span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          ) : (
            <div className='py-1 px-2'>
              <Text text={data[0] || '- -'} />
            </div>
          )}
        </>
      )}
    </Listbox>
  );
};
