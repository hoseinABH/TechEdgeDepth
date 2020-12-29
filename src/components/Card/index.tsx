import Link from 'next/link';
// components
import Image from 'next/image';
import { Article } from 'hooks/article';
import { useQueryClient } from 'react-query';
import { fetchArticle } from 'api';

export type CardProps = {
  article: Article;
};

function Card({ article }: CardProps) {
  const QueryClient = useQueryClient();
  return (
    <div
      onMouseEnter={async () => {
        await QueryClient.prefetchQuery(
          ['article', article.id],
          () => fetchArticle(article.id),
          {
            staleTime: 2 * 60 * 1000,
            cacheTime: 2 * 60 * 1000,
          }
        );
      }}
      className="bg-white dark:bg-gray-800 rounded shadow-lg cursor-pointer w-full mx-1 transition-all duration-200 transform hover:-translate-y-1 border-b-8 border-transparent  hover:border-purple-600"
    >
      <Link href="/:[id]" as={`/${article.id}`}>
        <a className="p-4 flex flex-col items-center ">
          <Image
            layout="fixed"
            height={50}
            width={50}
            className="rounded-full"
            src={article.user.profile_image}
            alt={article.title}
          />
          <div className="flex-grow text-center  text-gray-900 dark:text-gray-100 ">
            <h2 className=" text-xl title-font font-medium mb-3">
              {article.user.name}
            </h2>
            <p className="text-sm overflow-ellipsis">{article.title}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
