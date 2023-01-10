import { useState } from 'react';
import { ConfigurationOptions } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/ConfigurationOptions';
import { Details } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/Details';
import { Pricing } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/Pricing';
import { ProductSpecifications } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/ProductSpecifications';
import { Button } from '@ui/Button';
import Tab from '@ui/Tab';
import { Title } from '@ui/Typography/Title';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import { useTranslation } from 'next-i18next';

export const ProductCharacterization: React.FC<{}> = () => {
  const [edit, setEdit] = useState(false);
  const { t } = useTranslation('productDefinition');
  return (
    <WidgetContainer height='auto'>
      <InnerContainer>
        <div className='flex justify-between'>
          <Title text={t('productCharacterization')} />
          <div className='flex gap-3'>
            {edit && <Button onClick={() => setEdit(false)} text='Cancel' />}
            {!edit && <Button onClick={() => setEdit(!edit)} text={'Edit'} />}
            {edit && <Button text={'Save'} type={'submit'} />}
          </div>
        </div>
        <Tab>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.details.title')}>
            <Details editMode={edit} />
          </Tab.TabElement>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.pricing')}>
            <Pricing editMode={edit}></Pricing>
          </Tab.TabElement>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.configurationOptions')}>
            <ConfigurationOptions></ConfigurationOptions>
          </Tab.TabElement>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.productSpecifications')}>
            <ProductSpecifications></ProductSpecifications>
          </Tab.TabElement>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.telcoExt')}>
            <span>Telco Ext.</span>
          </Tab.TabElement>
          <Tab.TabElement tabTitle={t('productCharacterizationTabs.financeExt')}>
            <span>Finance Ext.</span>
          </Tab.TabElement>
        </Tab>
      </InnerContainer>
    </WidgetContainer>
  );
};
