import { Table } from '@ui/Table';
import { Title } from '@ui/Typography/Title';
import { Text } from '@ui/Typography/Text';
import { WidgetContainer } from '@ui/WidgetContainer';
import { createColumnHelper } from '@tanstack/react-table';

export const ProductSpecifications: React.FC<{}> = () => {
  type ProductSpecifications = {
    specificationType: string;
    value: string;
  };

  const defaultData: ProductSpecifications[] = [];

  const columnHelper = createColumnHelper<ProductSpecifications>();

  const columns = [
    columnHelper.accessor('specificationType', {
      id: 'optionName',
      cell: (info) => info.getValue(),
      header: () => <Text color='text-neutral-600 dark:text-white' text='Specification Type' />,
    }),
    columnHelper.accessor('value', {
      id: 'freeText',
      header: () => <Text color='text-neutral-600 dark:text-white' text='Value' />,
      cell: (info) => info.renderValue(),
    }),
  ];

  return (
    <WidgetContainer>
      <div className='flex flex-col gap-3'>
        <Title text='Product Specifications' />
        <Table columns={columns} defaultData={defaultData} />
      </div>
    </WidgetContainer>
  );
};
