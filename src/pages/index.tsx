import { GetServerSideProps } from 'next';
import { fetchArticles } from 'api';

// template
import DefaultTemplate from 'defaultTemplate';

// components
import ArticleCollection from 'components/ArticleCollection';
import Popular from 'components/Popular';

// hooks
import { Article, useArticles } from 'hooks/article';

export type HomeProps = {
  data: Article[];
};
export default function Home({ data }: HomeProps) {
  const { data: articles, isLoading, error } = useArticles(data);

  // get three recent article
  const popular = articles && articles.slice(0, 3);

  // get rest of articles
  const restArticles = articles && articles.filter((n) => !popular.includes(n));

  if (isLoading) return 'Loading...';
  if (error) return error.message;

  return (
    <DefaultTemplate maxWidth="4xl" title="Articles">
      <Popular popular={popular} />
      <ArticleCollection collection={restArticles} />
    </DefaultTemplate>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchArticles();

  return { props: { data } };
};
