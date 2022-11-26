import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';

const Dashboard: NextPage = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
      <h1>Dashboard</h1>
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
