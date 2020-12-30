import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { fetchArticle } from 'api';

// components
import { Article } from 'hooks/article';
import Image from 'next/image';

export type CollectionItemProps = {
  article: Article;
};

/**
 * @component CollectionItem
 */
function CollectionItem({ article }: CollectionItemProps) {
  const QueryClient = useQueryClient();

  return (
    <li
      onMouseEnter={async () => {
        await QueryClient.prefetchQuery(
          ['article', article.id],
          () => fetchArticle(article.id),
          {
            staleTime: 2 * 60 * 1000,
            cacheTime: 15 * 60 * 1000,
          }
        );
      }}
      className="bg-white dark:bg-gray-800   transition-all duration-200 transform hover:-translate-x-1 border-r-8 border-transparent hover:border-purple-600"
    >
      <Link href="/:[id]" as={`/${article.id}`}>
        <a className="block">
          <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-col sm:flex-row items-center space-x-2">
                <Image
                  layout="fixed"
                  height={50}
                  width={50}
                  className="rounded-full"
                  src={article.user.profile_image}
                  alt={article.title}
                />
                <div className="text-md text-blue-400 dark:text-gray-100">
                  {article.title}
                </div>
              </div>
              <div className="ml-2">
                {article.tag_list.map((tag, index) => (
                  <div
                    key={index}
                    className="ml-1 inline-flex text-xs rounded-full px-2 pb-px text-gray-700 bg-blue-200 dark:bg-gray-300 dark:text-gray-900"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default CollectionItem;
