import { TcLawPage } from 'components/_page';
import { NewsArticle, NewsArticleMeta, newsArticles } from 'data/news';
import fs from 'fs/promises';
import Link from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const NewsPage = ({
  newsArticles,
}: {
  newsArticles: NewsArticle[];
}): JSX.Element => {
  const [rowsShown, setRowsShown] = useState(2);
  const newsArticlesPerRow = 3;
  const loadMoreNews = () => setRowsShown(rowsShown + 2);
  return (
    <TcLawPage title="Novosti">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          // gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
        }}
      >
        {newsArticles
          // .concat(newsArticles) // For testing
          .slice(0, newsArticlesPerRow * rowsShown)
          .map((article, idx) => (
            <NewsArticle
              article={article}
              idx={idx}
              key={`article ${idx} ${article.title}`}
            ></NewsArticle>
          ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreNews}>Učitaj još novosti</button>
      </div>
    </TcLawPage>
  );
};

function NewsArticle({ article, idx }: { article: NewsArticle; idx: number }) {
  return (
    <article style={{ border: 'solid 1px', padding: '1rem' }}>
      <section>
        <div /* style={{ maxHeight: '220px', overflow: 'hidden' }} */>
          <ReactMarkdown>{takeUntilNthNewLine(article.md, 6)}</ReactMarkdown>
        </div>
      </section>
      <Link href={`/novosti/${idx}`}>
        <a>Čitaj dalje...</a>
      </Link>
    </article>
  );
}

function takeUntilNthNewLine(text: string, n: number) {
  let res = '';
  let nlRepetition = 0;
  for (const char of text) {
    if (char === '\n') {
      nlRepetition += 1;
      if (nlRepetition >= n) return res;
    }
    res += char;
  }
  return res;
}

export async function getStaticProps() {
  const newsArticlesWMardkown = await Promise.all(
    newsArticles.map(async (article) => await getArticleWithMarkdown(article)),
  );
  return {
    props: {
      newsArticles: newsArticlesWMardkown,
    },
  };
}

async function getArticleWithMarkdown(
  newsArticle: NewsArticleMeta,
): Promise<NewsArticle> {
  async function getArticleMarkdown(newsArticle: NewsArticleMeta) {
    return await fs.readFile(newsArticle.mdPath, 'utf-8');
  }
  return {
    ...newsArticle,
    md: await getArticleMarkdown(newsArticle),
  };
}

export default NewsPage;
