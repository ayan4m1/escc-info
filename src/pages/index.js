import React from 'react';
import { Container } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h4 className="display-4">ESCC Info</h4>
      </Container>
    </Layout>
  );
}
