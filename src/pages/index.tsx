import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { SiteType } from 'src/types/site';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage({ data, location }: PageProps<SiteType>): JSX.Element {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
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
