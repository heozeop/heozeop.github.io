export type PostType = {
  frontmatter: {
    date: string;
    title: string;
    description: string;
  }
  fields: {
    slug: string;
  }
  id: number;
  excerpt: string;
  html: string;
};