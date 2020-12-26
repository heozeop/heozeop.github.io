export type PostType = {
  frontmatter: {
    date: string;
    title: string;
    description: string;
  }
  fields: {
    slug: string;
  }
  excerpt: string;
};