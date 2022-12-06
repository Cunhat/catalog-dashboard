import '../styles/globals.css';
import { AppPropsWithLayout } from '@/types';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SessionProvider } from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';

import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return getLayout(
    <SessionProvider session={(pageProps as any).session}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Catalog App</title>
          <meta name='description' content='Your Catalog App' />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>,
  );
};

export default appWithTranslation(MyApp as any);
