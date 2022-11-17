import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@ui/Button';

export default function Login() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Button onClick={() => signIn('auth0')} text='Sign in' />
    </div>
  );
}
