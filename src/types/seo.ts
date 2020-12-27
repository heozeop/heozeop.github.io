export type SEOType = {
  description?: string;
  lang?: string;
  meta?: ConcatArray<
    { name: string; content: string; property?: undefined } | { property: string; content: string; name?: undefined }
  >;
  title: string;
};
