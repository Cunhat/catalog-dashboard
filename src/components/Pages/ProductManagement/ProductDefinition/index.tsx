import { Button } from '@ui/Button';
import { TextArea } from '@ui/Inputs/TextArea';
import { Modal } from '@ui/Modal';
import { RadioButtons } from '@ui/RadioButtons';
import { notification } from '@ui/Toaster';
import { Text } from '@ui/Typography/Text';
import { Title } from '@ui/Typography/Title';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import { SmallWidget } from '@ui/WidgetContainer/SmallWidget';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { ProductOfferingResponse } from '@/types/CatalogApiTypes';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from '@ui/Inputs/TextInput';
import { removeUndefinedProps } from '@/utils/utils';

const data = [
  {
    id: 'data1',
    label: 'No',
    value: 'false',
  },
  {
    id: 'data2',
    label: 'Yes',
    value: 'true',
  },
];

const isSellableData = [
  {
    id: 'data11',
    label: 'No',
    value: 'false',
  },
  {
    id: 'data12',
    label: 'Yes',
    value: 'true',
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

export const ProductDefinition: React.FC<{
  productOfferInfo: ProductOfferingResponse | undefined;
  handleUpdate: (values: ProductOfferingResponse) => void;
}> = ({ productOfferInfo, handleUpdate }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('productDefinition');
  const [serializedFlg, setSerializedFlg] = useState(productOfferInfo?.serializedFlg ? 'true' : 'false');
  const [isSellable, setIsSellable] = useState(productOfferInfo?.isSellable ? 'true' : 'false');
  const [value2, setValue2] = useState('physical');
  const [value3, setValue3] = useState('free');
  const {
    handleSubmit,
    formState: { isDirty },
    control,
  } = useForm<ProductOfferingResponse>();
  const [edit, setEdit] = useState(false);

  const primaryActionButton = () => {
    if (edit) {
      setOpen(!open);
    } else {
      setEdit(!edit);
    }
  };

  const submitChanges = (data: ProductOfferingResponse) => {
    const serializedFlgAux = serializedFlg === 'true' ? true : false;
    const isSellableAux = isSellable === 'true' ? true : false;
    let customData = { ...data };
    customData = removeUndefinedProps({ ...data });

    if (serializedFlgAux !== productOfferInfo?.serializedFlg) {
      customData = { ...customData, serializedFlg: serializedFlgAux };
    }
    if (isSellableAux !== productOfferInfo?.isSellable) {
      customData = { ...customData, isSellable: isSellableAux };
    }

    handleUpdate(customData);
  };

  const checkRadioButtons = () => {
    const serializedFlgAux = serializedFlg === 'true' ? true : false;
    const isSellableAux = isSellable === 'true' ? true : false;
    const value2Aux = value2 === 'physical' ? true : false;
    const value3Aux = value3 === 'free' ? true : false;

    //TODO: Add the rest of the fields when the values are confirmed
    return serializedFlgAux !== productOfferInfo?.serializedFlg || isSellableAux !== productOfferInfo?.isSellable;
  };

  return (
    <WidgetContainer height='auto'>
      <Modal open={open}>
        <div className='flex flex-col gap-3'>
          <Title text='Confirmation' />
          <Text text='Are you sure do you want to save the changes?' />
          <div className='flex gap-2 ml-auto'>
            <Button
              text='Yes'
              size='small'
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
            <Button text='No' size='small' onClick={() => setOpen(false)} />
          </div>
        </div>
      </Modal>
      <InnerContainer>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(submitChanges)}>
          <div className='flex justify-between items-center'>
            <Title text={t('productDefinition')} />
            <div className='flex gap-3'>
              {edit && <Button onClick={() => setEdit(false)} text='Cancel' />}
              {!edit && <Button onClick={() => primaryActionButton()} text={'Edit'} />}
              {edit && (isDirty || checkRadioButtons()) && <Button text={'Save'} type={'submit'} />}
            </div>
          </div>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextInput {...field} label={t('productName')} value={field.value ?? productOfferInfo?.name} isEditing={edit} />
            )}
          />
          <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-1'>
              <Controller
                name='charetristics.prodCode'
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label={t('productCode')}
                    value={field.value ?? productOfferInfo?.charetristics.prodCode}
                    isEditing={edit}
                  />
                )}
              />
            </div>
            <div className='col-span-1'>
              <Controller
                name='charetristics.modelCode'
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label={t('modelCode')}
                    value={field.value ?? productOfferInfo?.charetristics.modelCode}
                    isEditing={edit}
                  />
                )}
              />
            </div>
            <div className='col-span-2'>
              <Controller
                name='charetristics.modelDescription'
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label={t('modelDescription')}
                    value={field.value ?? productOfferInfo?.charetristics.modelDescription}
                    isEditing={edit}
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
                isEditing={edit}
              />
            )}
          />
          <Controller
            name='comments'
            control={control}
            render={({ field }) => (
              <TextArea {...field} label={t('comments')} value={field.value ?? productOfferInfo?.comments ?? ''} isEditing={edit} />
            )}
          />
          <div className='grid grid-cols-2 gap-3'>
            <Controller
              name='commercialLaunchDate'
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label={t('commercialLaunchDate')}
                  value={field.value ?? productOfferInfo?.commercialLaunchDate}
                  isEditing={edit}
                />
              )}
            />
            <Controller
              name='charetristics.supplier'
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label={t('supplier')}
                  value={field.value ?? productOfferInfo?.charetristics.supplier}
                  isEditing={edit}
                />
              )}
            />
          </div>
        </form>
        <div className='flex justify-between flex-wrap gap-2'>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('serializable')} />
              <RadioButtons setSelected={setSerializedFlg} selected={serializedFlg} data={data} name='radio_yes' disabled={!edit} />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('orderable')} />
              <RadioButtons
                setSelected={setIsSellable}
                selected={isSellable}
                data={isSellableData}
                name='radio_isSellable'
                disabled={!edit}
              />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <Title text={t('objectType')} />
              <RadioButtons setSelected={setValue2} selected={value2} data={data2} name='radio_objType' disabled={!edit} />
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2 items-center'>
              <Title text={t('restrictOptionCombis')} />
              <RadioButtons setSelected={setValue3} selected={value3} data={data3} name='radio_combis' disabled={!edit} />
            </div>
          </SmallWidget>
        </div>
      </InnerContainer>
    </WidgetContainer>
  );
};
