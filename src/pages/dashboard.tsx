import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';

const Dashboard: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context);
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth',
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
