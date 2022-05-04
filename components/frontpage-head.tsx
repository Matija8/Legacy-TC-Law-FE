import { useWindowDimensions } from 'hooks/use-window-dimensions-hook';
import { NewsArticle } from 'model/news-model';
import { gColors } from 'styles/style-constants';
import { NewsUtil } from '../util/news-util';
import { Markdown } from './markdown';

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  const { windowWidth } = useWindowDimensions();
  // TODO: Use css breakpoints
  const articlesShown = Math.min((windowWidth - 200) / 400, 3);
  newsArticles = newsArticles.slice(0, articlesShown);
  return (
    <section className="root">
      <style jsx>{`
        .root > div {
          flex: 1;
        }
        .root {
          display: flex;
          gap: 3rem;
        }
      `}</style>
      <div>
        <Keyword>Stručnost.</Keyword>
        <Keyword isRed>Efikasnost.</Keyword>
        <Keyword>Pouzdanost.</Keyword>
      </div>
      {newsArticles.map((article) => (
        <NewsArticleCard key={article.id} article={article} />
      ))}
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
  return (
    <h2 style={{ marginTop: 0, ...(isRed && { color: gColors.red1 }) }}>
      {children}
    </h2>
  );
}

function NewsArticleCard({ article }: { article: NewsArticle }) {
  const { title, body } = NewsUtil.getArticlePreview(article);
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <Markdown>{body}</Markdown>
    </div>
  );
}
