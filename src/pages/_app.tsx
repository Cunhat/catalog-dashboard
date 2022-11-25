import '../styles/globals.css';
import { AppPropsWithLayout } from '@/types';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SessionProvider } from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <SessionProvider session={(pageProps as any).session}>
      <Head>
        <title>Catalog App</title>
        <meta name='description' content='Your Catalog App' />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>,
  );
};

export default MyApp;
