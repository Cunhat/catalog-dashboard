import '../styles/globals.css';
import { AppPropsWithLayout } from '@/types';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
