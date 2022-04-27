import { NewsArticle } from 'model/news-model';
import { gColors } from 'styles/style-constants';
import { NewsUtil } from '../util/news-util';

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  newsArticles = newsArticles.slice(0, 3);
  return (
    <div className="root">
      <style jsx>{`
        .root > div {
          flex: 1;
        }
        .root {
          display: flex;
          gap: 1rem;
        }
      `}</style>
      <div>
        <p>Stručnost.</p>
        <p style={{ color: gColors.red1 }}>Efikasnost.</p>
        <p>Pouzdanost.</p>
      </div>
      {newsArticles.map((article) => {
        const { title } = NewsUtil.getArticlePreview(article);
        return <div key={title}>{title}</div>;
      })}
    </div>
  );
}
