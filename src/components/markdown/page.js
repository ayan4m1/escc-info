import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import NotFoundPage from '~pages/404';
import Layout from '~components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const MarkdownPage = ({ data }) => {
  if (!data || !data.mdx) {
    return <NotFoundPage />;
  }

  const {
    mdx: {
      body,
      frontmatter: { author, title, description }
    }
  } = data;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container>
        <Row>
          {title && (
            <Col md="6">
              <h1>{title}</h1>
            </Col>
          )}
          {author && (
            <Col md="6" className="text-right">
              <h3 className="mt-0 mb-4">
                by{' '}
                <a
                  href={`https://reddit.com/user/${author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /u/{author}
                </a>
              </h3>
            </Col>
          )}
          <Col md="12">
            <MDXRenderer>{body}</MDXRenderer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

MarkdownPage.displayName = 'MarkdownPage';
MarkdownPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string,
      frontmatter: PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
      })
    })
  })
};

export default MarkdownPage;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        author
        title
        description
      }
    }
  }
`;
