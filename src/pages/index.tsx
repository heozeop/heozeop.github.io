import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { SiteType } from '../shared/site';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LinkCard } from '../components/card';
import { PostType } from '../shared/post';
import styled from 'styled-components';

function IndexPage({ data, location }: PageProps<SiteType<PostType>>): JSX.Element {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Grid>
        <LinkCard title="TO ALG" to={'/alg'} />
        <LinkCard title="TO BLOG" to={'/blog'} />
        <LinkCard title="TO TIL" to={'/til'} />
        <LinkCard title="TO BOOK" to={'/book'} />
        <LinkCard title="TO TME" to={'/tme'} />
      </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
