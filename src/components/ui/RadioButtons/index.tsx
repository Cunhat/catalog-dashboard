type RadioData = Array<{
  id: string;
  label: string;
  value: string;
}>;

export const RadioButtons: React.FC<{
  name: string;
  onChange: (e: any, setSelected: (value: string) => void) => void;
  selected: string;
  data: RadioData;
  setSelected: (value: string) => void;
}> = ({ name, onChange, selected, data, setSelected }) => {
  return (
    <ul className='flex flex-wrap w-full'>
      {data.map((radio, index) => {
        return (
          <li className='relative flex flex-1 justify-center' key={radio.id}>
            <input
              onChange={(e) => onChange(e, setSelected)}
              checked={selected === radio.value}
              className='sr-only peer'
              type='radio'
              value={radio.value}
              name={name}
              id={radio.id}
            />
            <label
              className={`flex flex-1 justify-center py-2 px-3 bg-white border border-neutral-300 cursor-pointer focus:outline-none hover:bg-hover peer-checked:bg-primary text-neutral-500 peer-checked:text-white peer-checked:border-transparent ${
                index === 0 ? 'rounded-l-lg' : index === data.length - 1 ? 'rounded-r-lg' : ''
              }`}
              htmlFor={radio.id}
            >
              <p className='text-sm'>{radio.label}</p>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
