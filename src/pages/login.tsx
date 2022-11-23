import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { Title } from '@ui/Typography/Title';
// import LoginImg from '@/assets/img/login.svg';

const Login: NextPage = () => {
  useEffect(() => {
    signIn('auth0');
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen dark:bg-dark-background'>
      <Image src={'/img/login.svg'} alt='login_logo' width={500} height={500} />
      <Title text='You are being redirected to login page...' />
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
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
