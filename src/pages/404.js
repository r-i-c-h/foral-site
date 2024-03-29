import React from 'react';

import Layout from '../components/layout';
import SEOMetaBlock from '../components/SEOMetaBlock';

const NotFoundPage = () => (
  <Layout pageTitle="404: Not found">
    <SEOMetaBlock title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
