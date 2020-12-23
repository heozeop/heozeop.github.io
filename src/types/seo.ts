export type SEOType = {
  description?: string;
  lang?: string;
  meta?: ConcatArray<{ name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; }>;
  title: string;
}
