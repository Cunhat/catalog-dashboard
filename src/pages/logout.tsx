import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { Title } from '@ui/Typography/Title';

const Logout: NextPage = () => {
  useEffect(() => {
    signOut();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen dark:bg-dark-background'>
      <Image src={'/img/login.svg'} alt='login_logo' width={500} height={500} />
      <Title text='Signing out of the application...' />
    </div>
  );
};

export default Logout;

export const getServerSideProps: GetServerSideProps = async (context: GetSessionParams) => {
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
