import { Title } from '@ui/Typography/Title';
import { TextInput } from '@ui/Inputs/TextInput';
import { Select } from '@ui/Select';
import { useTranslation } from 'next-i18next';

export const Details: React.FC<{}> = () => {
  const { t } = useTranslation('productDefinition');
  return (
    <div className='flex flex-col gap-4'>
      <Title text={t('productCharacterizationTabs.details.objectDimensions')} />
      <div className='grid grid-cols-4 grid-rows-2 gap-3'>
        <div className='col-start-1 col-span-1'>
          <Select label={t('productCharacterizationTabs.details.unitSystems')} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemHeight')} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemLength')} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemWeight')} />
        </div>
        <div className='row-start-2 col-span-1'>
          <TextInput label={t('productCharacterizationTabs.details.itemWidth')} />
        </div>
      </div>
      <Title text={t('productCharacterizationTabs.details.productLifecycle')} />
      <div className='grid grid-cols-4 gap-3'>
        <TextInput label={t('productCharacterizationTabs.details.durationAfterActivation')} />
        <TextInput label={t('productCharacterizationTabs.details.units')} />
      </div>
    </div>
  );
};
