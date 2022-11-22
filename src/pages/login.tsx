import { GetServerSideProps, NextPage } from 'next';
import { getSession, GetSessionParams } from 'next-auth/react';
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
  useEffect(() => {
    signIn('auth0');
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
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
