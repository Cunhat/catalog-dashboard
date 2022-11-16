import '../styles/globals.css';
import { AppPropsWithLayout } from '@/types';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { Provider, atom, useAtom } from 'jotai';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Provider>
      <Component {...pageProps} />
    </Provider>,
  );
};

export default MyApp;
