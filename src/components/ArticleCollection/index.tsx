// components

import CollectionItem from 'components/CollectionItem';
import { Article } from 'hooks/article';
export type collectionProps = {
  collection: Article[];
};
function ArticleCollection({ collection }: collectionProps) {
  return (
    <ul className="space-y-2 sm:space-y-0 rounded-2xl">
      {collection.map((article) => (
        <CollectionItem key={article.id} article={article} />
      ))}
    </ul>
  );
}

export default ArticleCollection;
