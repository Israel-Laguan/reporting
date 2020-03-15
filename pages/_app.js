import '../view/bootstrap.min.css'
import Head from 'next/head';

const Reporting = ({ Component, pageProps }) => (
    <div>
      <Head>
        <title>Reporting ETL</title>
        {/* <link href="/css/print.css" type="text/css" media="print" rel="stylesheet" /> */}
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
);

export default Reporting;