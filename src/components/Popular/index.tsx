import Card from 'components/Card';
import { Article } from 'hooks/article';

export type PopularProps = {
  popular: Article[];
};

function Popular({ popular }: PopularProps) {
  return (
    <div className="block md:flex space-y-5 sm:space-y-0 mb-4 select-none sm:select-auto">
      {popular.map((p: Article) => (
        <Card key={p.id} article={p} />
      ))}
    </div>
  );
}

export default Popular;
