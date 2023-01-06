import { ConfigurationOptions } from '@/components/Pages/ProductManagement/ProductDefinition/Tabs/ConfigurationOptions';
import { Details } from '@/components/Pages/ProductManagement/ProductDefinition/Tabs/Details';
import { Pricing } from '@/components/Pages/ProductManagement/ProductDefinition/Tabs/Pricing';
import { ProductSpecifications } from '@/components/Pages/ProductManagement/ProductDefinition/Tabs/ProductSpecifications';
import { Button } from '@ui/Button';
import { TextArea } from '@ui/Inputs/TextArea';
import { TextInput } from '@ui/Inputs/TextInput';
import { Modal } from '@ui/Modal';
import { RadioButtons } from '@ui/RadioButtons';
import Tab from '@ui/Tab';
import { notification } from '@ui/Toaster';
import { Text } from '@ui/Typography/Text';
import { Title } from '@ui/Typography/Title';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import { SmallWidget } from '@ui/WidgetContainer/SmallWidget';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { ProductOfferingResponse } from '@/types/CatalogApiTypes';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ControlledTextInput } from '@ui/Inputs/ControlledTextInput';

const data = [
  {
    id: 'data1',
    label: 'No',
    value: 0,
  },
  {
    id: 'data2',
    label: 'Yes',
    value: 1,
  },
];

const data1 = [
  {
    id: 'data11',
    label: 'No',
    value: 'no',
  },
  {
    id: 'data12',
    label: 'Yes',
    value: 'yes',
  },
];
const data2 = [
  {
    id: 'data21',
    label: 'Physical',
    value: 'physical',
  },
  {
    id: 'dta22',
    label: 'Virtual',
    value: 'Virtual',
  },
];
const data3 = [
  {
    id: 'data31',
    label: 'Free',
    value: 'free',
  },
  {
    id: 'data32',
    label: 'Restricted',
    value: 'restricted',
  },
];

export const ProductDefinition: React.FC<{ productOfferInfo: ProductOfferingResponse | undefined }> = ({ productOfferInfo }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('productDefinition');
  const [value, setValue] = useState('yes');
  const [value1, setValue1] = useState('yes');
  const [value2, setValue2] = useState('physical');
  const [value3, setValue3] = useState('free');
  const {
    handleSubmit,
    formState: { isDirty },
    control,
  } = useForm<ProductOfferingResponse>({ defaultValues: productOfferInfo });

  const [edit, setEdit] = useState(false);

  const onChange = (value: any, setSelected: (value: string) => void) => {
    setSelected(value.target.value);
  };

  const primaryActionButton = () => {
    if (edit) {
      setOpen(!open);
    } else {
      setEdit(!edit);
    }
  };

  const submitChanges = (data: ProductOfferingResponse) => {
    console.log(data);
  };

  return (
    <WidgetContainer height=''>
      <Modal open={open}>
        <div className='flex flex-col gap-3'>
          <Title text='Confirmation' />
          <Text text='Are you sure do you want to save the changes?' />
          <div className='flex gap-2 ml-auto'>
            <Button
              text='Yes'
              type='small'
              onClick={() => {
                notification('success', 'Saved', 'Product saved successfully');
                setTimeout(() => {
                  notification('error', 'Error', 'Error occured while saving the product');
                }, 500);
                setTimeout(() => {
                  notification('warning', 'Warning', 'Warning occured while saving the product');
                }, 650);
                setOpen(false);
                setEdit(false);
              }}
            />
            <Button text='No' type='small' onClick={() => setOpen(false)} />
          </div>
        </div>
      </Modal>
      <InnerContainer>
        <form onSubmit={handleSubmit(submitChanges)}>
          <div className='flex justify-between items-center'>
            <Title text={t('productDefinition')} />
            <div className='flex gap-3'>
              {edit && <Button onClick={() => setEdit(false)} text='Cancel' />}
              {!edit && <Button onClick={() => primaryActionButton()} text={'Edit'} />}
              {edit && isDirty && <Button text={'Save'} type={'submit'} />}
            </div>
          </div>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <ControlledTextInput {...field} label={t('productName')} value={field.value ?? productOfferInfo?.name} editMode={edit} />
            )}
          />

          <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-1'>
              <Controller
                name='charetristics.prodCode'
                control={control}
                render={({ field }) => (
                  <ControlledTextInput
                    {...field}
                    label={t('productCode')}
                    value={field.value ?? productOfferInfo?.charetristics.prodCode}
                    editMode={edit}
                  />
                )}
              />
            </div>
            <div className='col-span-1'>
              <Controller
                name='charetristics.modelCode'
                control={control}
                render={({ field }) => (
                  <ControlledTextInput
                    {...field}
                    label={t('modelCode')}
                    value={field.value ?? productOfferInfo?.charetristics.modelCode}
                    editMode={edit}
                  />
                )}
              />
            </div>
            <div className='col-span-2'>
              <Controller
                name='charetristics.modelDescription'
                control={control}
                render={({ field }) => (
                  <ControlledTextInput
                    {...field}
                    label={t('modelDescription')}
                    value={field.value ?? productOfferInfo?.charetristics.modelDescription}
                    editMode={edit}
                  />
                )}
              />
            </div>
          </div>
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                label={t('productDescription')}
                value={field.value ?? productOfferInfo?.description ?? ''}
                editMode={edit}
              />
            )}
          />
          <Controller
            name='comments'
            control={control}
            render={({ field }) => (
              <TextArea {...field} label={t('comments')} value={field.value ?? productOfferInfo?.comments ?? ''} editMode={edit} />
            )}
          />
          <div className='grid grid-cols-2 gap-3'>
            <Controller
              name='commercialLaunchDate'
              control={control}
              render={({ field }) => (
                <ControlledTextInput
                  {...field}
                  label={t('commercialLaunchDate')}
                  value={field.value ?? productOfferInfo?.commercialLaunchDate}
                  editMode={edit}
                />
              )}
            />
            <Controller
              name='charetristics.supplier'
              control={control}
              render={({ field }) => (
                <ControlledTextInput
                  {...field}
                  label={t('supplier')}
                  value={field.value ?? productOfferInfo?.charetristics.supplier}
                  editMode={edit}
                />
              )}
            />
          </div>
        </form>
        <div className='flex justify-between flex-wrap gap-2'>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('serializable')} />
              <RadioButtons
                setSelected={setValue}
                selected={productOfferInfo?.serializedFlg ? 1 : 0}
                data={data}
                onChange={onChange}
                name='radio_yes'
              />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('orderable')} />
              <RadioButtons setSelected={setValue1} selected={value1} data={data1} onChange={onChange} name='radio_orderable' />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('objectType')} />
              <RadioButtons setSelected={setValue2} selected={value2} data={data2} onChange={onChange} name='radio_objType' />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2 items-center'>
              <Title text={t('restrictOptionCombis')} />
              <RadioButtons setSelected={setValue3} selected={value3} data={data3} onChange={onChange} name='radio_combis' />
            </div>
          </SmallWidget>
        </div>
      </InnerContainer>
    </WidgetContainer>
  );
};
