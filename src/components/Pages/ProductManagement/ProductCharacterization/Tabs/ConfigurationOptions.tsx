import { Table } from '@ui/Table';
import { Title } from '@ui/Typography/Title';
import { Text } from '@ui/Typography/Text';
import { WidgetContainer } from '@ui/WidgetContainer';
import { createColumnHelper } from '@tanstack/react-table';

export const ConfigurationOptions: React.FC<{}> = () => {
  type ProductOption = {
    optionName: string;
    freeText: string;
  };

  type OptionsValues = {
    optionsValue: string;
    activeOption: string;
  };

  const defaultData: ProductOption[] = [];

  const columnHelper = createColumnHelper<ProductOption>();
  const optionsValuesHelper = createColumnHelper<OptionsValues>();

  const columns = [
    columnHelper.accessor('optionName', {
      id: 'optionName',
      cell: (info) => info.getValue(),
      header: () => <Text color='text-neutral-600 dark:text-white' text='Option Name' />,
    }),
    columnHelper.accessor('freeText', {
      id: 'freeText',
      header: () => <Text color='text-neutral-600 dark:text-white' text='Free Text?' />,
      cell: (info) => info.renderValue(),
    }),
  ];
  const optionsValues = [
    optionsValuesHelper.accessor('optionsValue', {
      id: 'optionsValue',
      cell: (info) => info.getValue(),
      header: () => <Text color='text-neutral-600 dark:text-white' text='Option Value' />,
    }),
    optionsValuesHelper.accessor('activeOption', {
      id: 'activeOption',
      header: () => <Text color='text-neutral-600 dark:text-white' text='Active option?' />,
      cell: (info) => info.renderValue(),
    }),
  ];

  return (
    <WidgetContainer>
      <div className='flex flex-col gap-3'>
        <Title text='Product Options' />
        <Table columns={columns} defaultData={defaultData} />
        <Title text='Options Values' />
        <Table columns={optionsValues} defaultData={defaultData} />
      </div>
    </WidgetContainer>
  );
};
