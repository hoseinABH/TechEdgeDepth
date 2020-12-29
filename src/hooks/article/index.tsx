import * as api from 'api';
import { useQuery } from 'react-query';

export interface Article {
  title: string;
  tag_list?: string[];
  url: string;
  id: number;
  description?: string;
  published_at: Date;
  body_markdown?: string;
  user: {
    name?: string;
    profile_image?: string;
  };
}
const useArticles = (data: Article[]) => {
  return useQuery<Article[], Error>('articles', api.fetchArticles, {
    initialData: data,
  });
};

const useArticle = (id: number, data: Article) => {
  return useQuery<Article, Error>(['article', id], () => api.fetchArticle(id), {
    initialData: data,
  });
};

export { useArticles, useArticle };
