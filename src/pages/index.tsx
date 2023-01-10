import { ProductDefinition } from '@/components/Pages/ProductManagement/ProductDefinition';
import { Comments } from '@/components/Pages/ProductManagement/Widgets/Comments';
import { Labels } from '@/components/Pages/ProductManagement/Widgets/Labels';
import { ProductInformation } from '@/components/Pages/ProductManagement/Widgets/ProductInformation';
import { VersionHistory } from '@/components/Pages/ProductManagement/Widgets/VersionHistory';
import { productOffering } from '@/server/api';
import { NextPageWithLayout } from '@/types';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DashboardLayout } from '@ui/Layouts';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notification } from '@ui/Toaster';
import { PageSkeletonLoader } from '@/components/Pages/ProductManagement/ProductDefinition/PageSkeletonLoader';
import { ConfigurationOptions } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/ConfigurationOptions';
import { Details } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/Details';
import { Pricing } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/Pricing';
import { ProductSpecifications } from '@/components/Pages/ProductManagement/ProductCharacterization/Tabs/ProductSpecifications';
import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import Tab from '@ui/Tab';
import { Title } from '@ui/Typography/Title';
import { useTranslation } from 'next-i18next';
import { Button } from '@ui/Button';
import { updateProductOffering } from '@/server/api';
import { ProductOfferingResponse } from '@/types/CatalogApiTypes';
import { ProductCharacterization } from '@/components/Pages/ProductManagement/ProductCharacterization';

interface CustomJWT extends JWT {
  accessToken: string;
}
interface HomeProps {
  session: Session;
  token: CustomJWT;
  locales: string;
}

const Home: NextPageWithLayout<HomeProps> = (props) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['productOffering'],
    queryFn: () => productOffering(props?.token?.accessToken),
    onError: () => {
      notification('error', 'Error', 'Error fetching data from server');
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState(false);
  const { t } = useTranslation('productDefinition');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: ProductOfferingResponse) => {
      return updateProductOffering(props?.token?.accessToken, values);
    },
    onSuccess: () => {
      notification('success', 'Success', 'Product updated successfully');
      queryClient.invalidateQueries({ queryKey: ['productOffering'] });
    },
    onError: () => {
      notification('error', 'Error', 'Error updating product');
    },
  });

  const handleUpdate = (values: ProductOfferingResponse) => {
    mutation.mutate(values);
  };

  return (
    <div className='flex flex-row gap-4 h-full w-full max-w-screen-2xl'>
      <div className='flex-1 flex flex-col gap-3'>
        {isFetching ? <PageSkeletonLoader /> : <ProductDefinition productOfferInfo={data} handleUpdate={handleUpdate} />}
        {<ProductCharacterization />}
      </div>

      <div id='expand' className='flex m-auto w-fit items-center'>
        <motion.div
          animate={{
            rotate: open ? 180 : 0,
            transition: {
              duration: 0.5,
              delay: 0.1,
            },
          }}
        >
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className={`flex text-xs rounded-full bg-neutral-100 p-3 text-neutral-500  hover:cursor-pointer hover:bg-hover hover:text-primary dark:bg-neutral-500 dark:text-white`}
            onClick={() => setOpen(!open)}
          ></FontAwesomeIcon>
        </motion.div>
      </div>
      <AnimatePresence initial={true} mode='wait'>
        {open && (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 500,
              transition: { duration: 0.3 },
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
          >
            {open && (
              <motion.div
                animate={{
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className='flex flex-col gap-3'
              >
                <ProductInformation />
                <Labels />
                <VersionHistory />
                <Comments />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout userInfo={page?.props?.session?.user}>{page}</DashboardLayout>;
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
