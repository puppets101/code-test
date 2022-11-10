import Head from 'next/head';
import Category from '../components/Category';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

const IndexPage = () => (
  <>
    <Head>
      <title>Varg Nyhetsbrev</title>
      <meta name='keywords' content='outdoor, adventure, newsletter' />
    </Head>
    <Layout>
      <Category />
      <Newsletter />
    </Layout>
  </>
);

export default IndexPage;
