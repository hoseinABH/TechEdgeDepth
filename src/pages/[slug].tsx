import { useRouter } from 'next/router';
import { Article, useArticle } from 'hooks/article';
import { fetchArticle } from 'api';
import { GetServerSideProps } from 'next';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';
import Link from 'next/link';

// theme
import DefaultTemplate from 'defaultTemplate';

export type ArticleProps = {
  data: Article;
};

/**
 * @component Article
 */
function Slug({ data }: ArticleProps) {
  const {
    query: { slug },
  } = useRouter();

  const { data: article, error, isLoading } = useArticle(Number(slug), data);
  if (isLoading) return 'Loading...';
  if (error) return error.message;
  return (
    <DefaultTemplate maxWidth="4xl" title={article.title}>
      <div className="max-w-4xl px-6 sm:px-10 my-4 py-6 bg-white dark:bg-gray-800 transition-all duration-200 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600 dark:text-gray-200">
            published at {new Date(article.published_at).toLocaleDateString()}
          </span>
          <div>
            <a className="flex items-center" href="#">
              <img
                className="mx-4 w-10 h-10 object-cover rounded-full "
                src={article.user?.profile_image}
                alt="avatar"
              />
              <h1 className="text-gray-700 font-bold dark:text-gray-400">
                {article.user?.name}
              </h1>
            </a>
          </div>
        </div>
        <div className="mt-2">
          <a
            className="text-sm sm:text-2xl text-gray-700 font-bold hover:text-gray-600 dark:text-gray-200"
            href={article.url}
          >
            {article.title}
          </a>
          <p className="mt-2 text-gray-600  dark:text-gray-300">
            <Markdown
              className="break-words  sm:overflow-x-hidden overflow-auto"
              plugins={[gfm]}
              renderers={{ Link: Link }}
              children={article.body_markdown}
            />
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a className="text-blue-600 hover:underline" href={article.url}>
            Read more
          </a>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { slug },
}) => {
  const data = await fetchArticle(Number(slug));
  return { props: { data } };
};

export default Slug;
