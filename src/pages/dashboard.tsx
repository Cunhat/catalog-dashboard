import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';
import { Toaster } from '@ui/Toaster';

const Dashboard: NextPage = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
      <h1>Dashboard</h1>
      <Toaster title='Warning' message='This is a warning toaster' type='warning'></Toaster>
      <Toaster title='Error' message='This is a error toaster' type='error'></Toaster>
      <Toaster title='Success' message='This is a success toaster' type='success'></Toaster>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

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
    },
  };
};
