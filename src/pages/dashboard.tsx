import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';
import { NextPageWithLayout } from '@/types';
import { DashboardLayout } from '@ui/Layouts';
import { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
      <h1>Dashboard</h1>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout userInfo={page.props.session.user}>{page}</DashboardLayout>;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  const locale = await serverSideTranslations(context.locale!, ['common', 'productDefinition']);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      ...locale,
    },
  };
};
