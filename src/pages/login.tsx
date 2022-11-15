import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <div className=''>
      <button onClick={() => signIn('auth0')}>Sign in</button>
    </div>
  );
}
