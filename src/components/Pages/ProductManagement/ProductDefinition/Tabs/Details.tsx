import { Title } from '@ui/Typography/Title';
import { TextInput } from '@ui/Inputs/TextInput';
import { Select } from '@ui/Select';
import { useTranslation } from 'next-i18next';

export const Details: React.FC<{ editMode: boolean }> = ({ editMode }) => {
  const { t } = useTranslation('productDefinition');
  return (
    <div className='flex flex-col gap-4'>
      <Title text={t('productCharacterizationTabs.details.objectDimensions')} />
      <div className='grid grid-cols-4 grid-rows-2 gap-3'>
        <div className='col-start-1 col-span-1'>
          <Select label={t('productCharacterizationTabs.details.unitSystems')} editMode={editMode} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemHeight')} editMode={editMode} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemLength')} editMode={editMode} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemWeight')} editMode={editMode} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemWidth')} editMode={editMode} />
        </div>
      </div>
      <Title text={t('productCharacterizationTabs.details.productLifecycle')} />
      <div className='grid grid-cols-4 gap-3'>
        <TextInput label={t('productCharacterizationTabs.details.durationAfterActivation')} editMode={editMode} />
        <TextInput label={t('productCharacterizationTabs.details.units')} editMode={editMode} />
      </div>
    </div>
  );
};
