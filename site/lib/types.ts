export type SanityResource = {
  _id: string;
  title: string;
  titleFr?: string;
  titleZh?: string;
  titleIt?: string;
  description?: string;
  descriptionFr?: string;
  descriptionIt?: string;
  type: 'article' | 'video' | 'pdf';
  subcategories?: string[];
  categories?: string[];
  videoUrl?: string;
  file?: {asset: {url: string}};
  coverImage?: any;
  publishedAt?: string;
};
