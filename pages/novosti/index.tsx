import { TcLawPage } from 'components/_page';
import { NewsArticle, NewsArticleMeta, newsArticles } from 'data/news';
import fs from 'fs/promises';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const newsPage = ({ newsArticles }: { newsArticles: NewsArticle[] }) => {
  return (
    <TcLawPage title="Novosti">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {newsArticles.slice(0, 3).map((article, idx) => (
          <article
            key={`article ${idx} ${article.title}`}
            style={{ border: 'solid 1px', padding: '1rem' }}
          >
            <section>
              <div /* style={{ maxHeight: '220px', overflow: 'hidden' }} */>
                <ReactMarkdown>
                  {takeUntilNthNewLine(article.md, 6)}
                </ReactMarkdown>
              </div>
            </section>
            <Link href={`/novosti/${idx}`}>
              <a>Čitaj dalje...</a>
            </Link>
          </article>
        ))}
      </div>
    </TcLawPage>
  );
};

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

export default newsPage;
