import { NewsArticle } from 'model/news-model';
import { ReadMoreLink } from 'pages/novosti';
import { gColors } from 'styles/style-constants';
import { NewsUtil } from '../util/news-util';
import styles from './frontpage-head.module.scss';
import { Markdown } from './markdown';

export function FrontHead({ newsArticles }: { newsArticles: NewsArticle[] }) {
  newsArticles = newsArticles.slice(0, 3);
  return (
    <section className={styles.root}>
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
