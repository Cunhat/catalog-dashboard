import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { AppPropsWithLayout } from '@/types';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
