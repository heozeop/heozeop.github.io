export type PostType = {
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
  fields: {
    slug: string;
  };
  id: number;
  excerpt: string;
  html: string;
};

export type AlgPostType = PostType & {
  frontmatter: {
    type: string;
  };
};
