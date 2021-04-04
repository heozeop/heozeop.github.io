import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { SiteType } from '../shared/site';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PostType } from '../shared/post';

function NotFoundPage({ data, location }: PageProps<SiteType<PostType>>): JSX.Element {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
