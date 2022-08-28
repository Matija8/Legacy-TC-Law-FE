import { useWindowDimensions } from 'hooks/use-window-dimensions-hook';
import { NewsArticle } from 'model/news-model';
import { ReadMoreLink } from 'pages/novosti';
import { useEffect, useState } from 'react';
import { gColors } from 'styles/style-constants';
import { clamp } from 'util/helpers';
import { NewsUtil } from '../util/news-util';
import { Markdown } from './markdown';

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  const { windowWidth } = useWindowDimensions();
  // TODO: Use css breakpoints?

  const [articlesShownCount, setArShownCount] = useState(0);

  useEffect(() => {
    // You have to set articlesShownCount based on window width
    // inside a useEffect. Otherwise you'll get a hydration error.
    // https://nextjs.org/docs/messages/react-hydration-error
    let newArShownCount = (windowWidth - 200) / 400;
    newArShownCount = clamp(0, 3, newArShownCount);
    setArShownCount(newArShownCount);
  }, [windowWidth]);

  newsArticles = newsArticles.slice(0, articlesShownCount);
  return (
    <section className="root">
      <style jsx>{`
        .root > div {
          flex: 1;
        }
        .root {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
          margin-bottom: 5rem;
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
    <h1
      style={{
        fontSize: '2.5rem',
        marginTop: 0,
        ...(isRed && { color: gColors.red1 }),
      }}
    >
      {children}
    </h1>
  );
}

function NewsArticleCard({ article }: { article: NewsArticle }) {
  const { title, body } = NewsUtil.getArticlePreview(article);
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <Markdown>{body}</Markdown>
      <ReadMoreLink article={article} />
    </div>
  );
}
