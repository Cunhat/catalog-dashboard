import '../styles/globals.css';
import { AppPropsWithLayout } from '@/types';
import { config } from '@fortawesome/fontawesome-svg-core';
import { SessionProvider } from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';

// const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <SessionProvider session={(pageProps as any).session}>
      <Component {...pageProps} />
    </SessionProvider>,
  );
};

export default MyApp;
