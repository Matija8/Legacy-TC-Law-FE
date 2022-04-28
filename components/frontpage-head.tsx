import { NewsArticle } from 'model/news-model';
import { gColors } from 'styles/style-constants';
import { NewsUtil } from '../util/news-util';

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  newsArticles = newsArticles.slice(0, 3);
  return (
    <section className="root">
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
        <Keyword>Stručnost.</Keyword>
        <Keyword isRed>Efikasnost.</Keyword>
        <Keyword>Pouzdanost.</Keyword>
      </div>
      {newsArticles.map((article) => {
        const { title } = NewsUtil.getArticlePreview(article);
        return <div key={title}>{title}</div>;
      })}
    </section>
  );
}

function Keyword({
  isRed,
  children,
}: {
  isRed?: boolean;
  children: React.ReactNode;
}) {
  return <h2 style={{ ...(isRed && { color: gColors.red1 }) }}>{children}</h2>;
}
