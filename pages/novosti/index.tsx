import { TcLawPage } from 'components/_page';
import { NewsArticle } from 'model/news-model';
import Link from 'next/link';
import { useState } from 'react';
import { NewsUtil } from 'util/news-util';
import { NewsUtilServer } from 'util/news-util-server';
import { WorkDomainUtil } from 'util/work-domain-util';

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
          // gridTemplateColumns: 'repeat(3, 1fr)',
          // TODO: Have max 3 columns via media query!
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
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
              key={`article ${article.id}`}
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
  const { title, body } = NewsUtil.getArticlePreview(article);
  const workDomain = WorkDomainUtil.findWorkDomainById(article.domain);
  return (
    <article
      style={{
        border: 'solid 1px',
        padding: '1rem',
        // background: 'linear-gradient(to bottom, red, transparent)',
      }}
    >
      <section>
        <div>
          {/* T*DO */}
          {workDomain?.title &&
            workDomain?.title.split('\n').map((titleLine) => (
              <p
                key={titleLine}
                style={{ textAlign: 'initial', margin: 0 }}
                className="article-work-domain"
              >
                {titleLine}
              </p>
            ))}
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </section>
      {/* TODO: Position read more link at the bottom fixed, not below the body */}
      <Link href={`/novosti/${idx}`}>
        <a>Čitaj dalje...</a>
      </Link>
    </article>
  );
}

export async function getStaticProps() {
  return {
    props: {
      newsArticles: await NewsUtilServer.getArticles(),
    },
  };
}

export default NewsPage;
