import { useState, useEffect } from 'react';
import { format, subMonths, addMonths, subYears, addYears, isEqual, getDaysInMonth, getDay } from 'date-fns';
import { Text } from '@ui/Typography/Text';
import { PopoverMenu } from '@ui/PopoverMenu';

type DatepickerType = 'date' | 'month' | 'year';

export const DatePicker: React.FC<{ label: string }> = ({ label }) => {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [dayCount, setDayCount] = useState<Array<number>>([]);
  const [blankDays, setBlankDays] = useState<Array<number>>([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState<DatepickerType>('date');

  const decrement = () => {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case 'month':
        setDatepickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case 'year':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case 'month':
        setDatepickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case 'year':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const isToday = (date: number) => isEqual(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date), selectedDate);

  const setDateValue = (date: number) => () => {
    setSelectedDate(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), date));
    setShowDatepicker(false);
  };

  const getDayCount = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    const dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    const blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month: number) => isEqual(new Date(selectedDate.getFullYear(), month, selectedDate.getDate()), selectedDate);

  const setMonthValue = (month: number) => () => {
    setDatepickerHeaderDate(new Date(datepickerHeaderDate.getFullYear(), month, datepickerHeaderDate.getDate()));
    setType('date');
  };

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

  const showMonthPicker = () => setType('month');

  const showYearPicker = () => setType('date');

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  const teste = (i: any) => {
    // console.log(i);
    // console.log(datepickerHeaderDate.getFullYear());
    console.log(datepickerHeaderDate.getDate());

    //console.log(format(new Date(datepickerHeaderDate.getFullYear(), i, datepickerHeaderDate.getDate()), 'MMM'));
    console.log(format(new Date(datepickerHeaderDate.getFullYear(), 1, datepickerHeaderDate.getDate()), 'MMM'));

    return format(new Date(datepickerHeaderDate.getFullYear(), i, datepickerHeaderDate.getDate()), 'MMM');
  };

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <Text text={label} />
        <div className='relative'>
          <input
            type='text'
            readOnly
            className='border-neutral-300 hover:cursor-pointer border border-solid rounded-md text-sm text-neutral-500 py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
        ease-in-out dark:bg-dark-widget dark:text-white'
            placeholder='Select date'
            value={format(selectedDate, 'dd-MM-yyyy')}
            onClick={toggleDatepicker}
          />
          <PopoverMenu side='bottom' open={showDatepicker} onOpenChange={toggleDatepicker}>
            <div className='bg-white dark:bg-dark-drops rounded-lg p-4 shadow-lg' style={{ width: '17rem' }}>
              <div className='flex justify-between items-center mb-2'>
                <div>
                  <button
                    type='button'
                    className='transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 dark:hover:bg-primary p-1 rounded-full'
                    onClick={decrement}
                  >
                    <svg
                      className='h-6 w-6 text-gray-500 inline-flex dark:text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                  </button>
                </div>
                {type === 'date' && (
                  <div
                    onClick={showMonthPicker}
                    className='flex-grow p-1 text-lg font-bold text-neutral-500 cursor-pointer hover:bg-gray-200 rounded-lg dark:text-white dark:hover:bg-primary'
                  >
                    <p className='text-center'>{format(datepickerHeaderDate, 'MMMM')}</p>
                  </div>
                )}
                <div
                  onClick={showYearPicker}
                  className='flex-grow p-1 text-lg font-bold text-neutral-500 cursor-pointer hover:bg-gray-200 rounded-lg dark:text-white dark:hover:bg-primary'
                >
                  <p className='text-center'>{format(datepickerHeaderDate, 'yyyy')}</p>
                </div>
                <div>
                  <button
                    type='button'
                    className='transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 dark:hover:bg-primary p-1 rounded-full'
                    onClick={increment}
                  >
                    <svg
                      className='h-6 w-6 text-gray-500 dark:text-white inline-flex'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </button>
                </div>
              </div>
              {type === 'date' && (
                <>
                  <div className='flex flex-wrap mb-3 -mx-1'>
                    {DAYS.map((day, i) => (
                      <div key={i} style={{ width: '14.26%' }} className='px-1'>
                        <div className='text-neutral-500 dark:text-white font-medium text-center text-xs'>{day}</div>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-wrap -mx-1'>
                    {blankDays.map((_, i) => (
                      <div key={i} style={{ width: '14.26%' }} className='text-center border p-1 border-transparent text-sm'></div>
                    ))}
                    {dayCount.map((d, i) => (
                      <div key={i} style={{ width: '14.26%' }} className='px-1 mb-1'>
                        <div
                          onClick={setDateValue(d)}
                          className={`cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100 ${
                            isToday(d) ? 'bg-primary text-white' : 'text-neutral-500  hover:bg-primary hover:text-white dark:text-white'
                          }`}
                        >
                          {d}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {type === 'month' && (
                <div className='flex flex-wrap -mx-1'>
                  {Array(12)
                    .fill(null)
                    .map((_, i) => (
                      <div key={i} onClick={setMonthValue(i)} style={{ width: '25%' }}>
                        <div
                          className={`cursor-pointer flex justify-center items-center  p-5 font-semibold text-center text-sm rounded-lg hover:bg-primary ${
                            isSelectedMonth(i) ? 'bg-primary text-white' : 'text-neutral-500  hover:bg-primary hover:text-white'
                          }`}
                        >
                          {teste(i)}
                        </div>
                      </div>
                    ))}
                </div>
              )}{' '}
              {/* {type === 'year' && (
                
              )} */}
            </div>
          </PopoverMenu>
        </div>
      </div>
    </div>
  );
};
