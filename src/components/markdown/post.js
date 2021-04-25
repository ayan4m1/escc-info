import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '~components/seo';
import NotFoundPage from '~pages/404';
import Layout from '~components/layout';

const MarkdownPost = ({ data }) => {
  if (!data || !data.mdx) {
    return <NotFoundPage />;
  }

  const {
    mdx: {
      body,
      frontmatter: { title }
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} description={title} />
      <Container>
        <Row>
          <Col md="12">
            <MDXRenderer>{body}</MDXRenderer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

MarkdownPost.displayName = 'MarkdownPost';
MarkdownPost.propTypes = {
  data: PropTypes.object
};

export default MarkdownPost;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`;
