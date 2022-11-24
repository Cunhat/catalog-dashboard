import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Catalog App</title>
        </Head>
        <body className=''>
          <Main />
          <div id='modalPortal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
