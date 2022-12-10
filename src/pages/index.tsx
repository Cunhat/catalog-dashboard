import { ProductDefinition } from '@/components/Pages/ProductDefinition';
import { Comments } from '@/components/Pages/ProductManagement/Widgets/Comments';
import { Labels } from '@/components/Pages/ProductManagement/Widgets/Labels';
import { ProductInformation } from '@/components/Pages/ProductManagement/Widgets/ProductInformation';
import { VersionHistory } from '@/components/Pages/ProductManagement/Widgets/VersionHistory';
import { productOffering } from '@/server/api';
import { NextPageWithLayout } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { DashboardLayout } from '@ui/Layouts';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CustomJWT extends JWT {
  accessToken: string;
}
interface HomeProps {
  session: Session;
  token: CustomJWT;
  locales: string;
}

const Home: NextPageWithLayout<HomeProps> = (props) => {
  //const query = useQuery({ queryKey: ['productOffering'], queryFn: () => productOffering(props?.token?.accessToken) });
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: (width = 500) => ({
      width: width,
      transition: { duration: 1 },
    }),
    closed: (width = 0) => ({
      width: width,
      transition: { duration: 1 },
    }),
  };

  //grid grid-cols-3
  return (
    <div className='flex flex-row gap-4 h-full w-full max-w-screen-2xl'>
      <div className='flex-1'>
        <ProductDefinition />
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
