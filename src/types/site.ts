import { PostType } from './post';

export type SiteType = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: PostType[];
  };
};

export interface BlogPostType extends SiteType {
  markdownRemark: PostType;
  previous: PostType;
  next: PostType;
}
