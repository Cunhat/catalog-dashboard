import React, { PropsWithChildren, useEffect, useState } from 'react';
import { DashboardLayout } from '@ui/Layouts';
import { NextPageWithLayout } from '@/types';
import { ReactElement } from 'react';
import { WidgetContainer, InnerContainer } from '@ui/WidgetContainer';
import { Title } from '@ui/Typography/Title';
import { Text } from '@ui/Typography/Text';
import { TextInput } from '@ui/Inputs/TextInput';
import { TextArea } from '@ui/Inputs/TextArea';
import { Button } from '@ui/Button';
import { VersionIcon } from '@ui/VersionIcon';
import { RadioButtons } from '@ui/RadioButtons';
import { SmallWidget } from '@ui/WidgetContainer/SmallWidget';
import { Tag } from '@ui/Tag';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Tab from '@ui/Tab';
import { Details } from '@/components/Pages/ProductManagement/Tabs/details';
import { DatePicker } from '@ui/DatePicker';
import { Modal } from '@ui/Modal';
import { ProductInformation } from '@/components/Pages/ProductManagement/Widgets/ProductInformation';
import { Labels } from '@/components/Pages/ProductManagement/Widgets/Labels';
import { VersionHistory } from '@/components/Pages/ProductManagement/Widgets/VersionHistory';
import { Comments } from '@/components/Pages/ProductManagement/Widgets/Comments';
import { Pricing } from '@/components/Pages/ProductManagement/Tabs/pricing';
import { ConfigurationOptions } from '@/components/Pages/ProductManagement/Tabs/ConfigurationOptions';
import { ProductSpecifications } from '@/components/Pages/ProductManagement/Tabs/ProductSpecifications';
import { getSession, GetSessionParams } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import toast from 'react-hot-toast';
import { notification } from '@ui/Toaster';
import { useQuery } from '@tanstack/react-query';
import { productOffering } from '@/server/api';
import { Session } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const data = [
  {
    id: 'data1',
    label: 'No',
    value: 'no',
  },
  {
    id: 'data2',
    label: 'Yes',
    value: 'yes',
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

interface CustomJWT extends JWT {
  accessToken: string;
}
interface HomeProps {
  session: Session;
  token: CustomJWT;
  locales: string;
}

const Home: NextPageWithLayout<HomeProps> = (props) => {
  const [value, setValue] = useState('yes');
  const [value1, setValue1] = useState('yes');
  const [value2, setValue2] = useState('physical');
  const [value3, setValue3] = useState('free');
  const [open, setOpen] = useState(false);

  const query = useQuery({ queryKey: ['productOffering'], queryFn: () => productOffering(props?.token?.accessToken) });

  const { t } = useTranslation('productDefinition');

  const onChange = (value: any, setSelected: (value: string) => void) => {
    setSelected(value.target.value);
  };

  return (
    <div className='grid grid-cols-3 gap-4 h-full w-full max-w-screen-2xl'>
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
              }}
            />
            <Button text='No' type='small' onClick={() => setOpen(false)} />
          </div>
        </div>
      </Modal>

      <div className='col-span-2'>
        <WidgetContainer>
          <InnerContainer>
            <div className='flex justify-between items-center'>
              <Title text={t('productDefinition')} />
              <Button onClick={() => setOpen(!open)} text='Save' />
            </div>
            <TextInput label={t('productName')} />
            <div className='grid grid-cols-4 gap-3'>
              <div className='col-span-1'>
                <TextInput label={t('productCode')} />
              </div>
              <div className='col-span-1'>
                <TextInput label={t('modelCode')} />
              </div>
              <div className='col-span-2'>
                <TextInput label={t('modelDescription')} />
              </div>
            </div>
            <TextArea label={t('productDescription')} />
            <TextArea label={t('comments')} />
            <div className='grid grid-cols-2 gap-3'>
              <TextInput label={t('commercialLaunchDate')} />
              <TextInput label={t('supplier')} />
            </div>
            <div className='flex justify-between flex-wrap gap-2'>
              <SmallWidget>
                <div className='flex flex-col gap-2'>
                  <Title text={t('serializable')} />
                  <RadioButtons setSelected={setValue} selected={value} data={data} onChange={onChange} name='radio_yes' />
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
            <WidgetContainer>
              <InnerContainer>
                <Title text={t('productCharacterization')} />
                <Tab>
                  <Tab.TabElement tabTitle={t('productCharacterizationTabs.details.title')}>
                    <Details />
                  </Tab.TabElement>
                  <Tab.TabElement tabTitle={t('productCharacterizationTabs.pricing')}>
                    <Pricing></Pricing>
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
          </InnerContainer>
        </WidgetContainer>
      </div>
      <div className='col-span-1 flex flex-col gap-3'>
        <ProductInformation />
        <Labels />
        <VersionHistory />
        <Comments />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const secret = process.env.NEXTAUTH_SECRET;

  const token = await getToken({
    req: context.req,
    secret: secret,
  });

  if (!session && !token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const locale = await serverSideTranslations(context.locale!, ['common', 'productDefinition']);

  return {
    props: {
      session,
      token,
      ...locale,
    },
  };
};
