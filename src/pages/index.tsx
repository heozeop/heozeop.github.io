import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { SiteType } from '../shared/site';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage({ data, location }: PageProps<SiteType>): JSX.Element {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Link to="/til">TO TIL</Link>
      <Link to="/blog">TO BLOG</Link>
      <Bio />
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
