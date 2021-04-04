import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { SiteType } from '../shared/site';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LinkCard } from '../components/card';
import { PostType } from '../shared/post';

function IndexPage({ data, location }: PageProps<SiteType<PostType>>): JSX.Element {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ul className="link-card-list">
        <li>
          <LinkCard title="TO ALG" to={'/alg'} />
        </li>
        <li>
          <LinkCard title="TO BLOG" to={'/blog'} />
        </li>
        <li>
          <LinkCard title="TO TIL" to={'/til'} />
        </li>
        <li>
          <LinkCard title="TO BOOK" to={'/book'} />
        </li>
      </ul>
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
