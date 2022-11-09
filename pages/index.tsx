import Head from 'next/head';
import Category from '../components/Category';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

const IndexPage = () => (
  <Layout>
    <Category />
    <Newsletter />
  </Layout>
);

export default IndexPage;
