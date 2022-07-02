import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Markdown } from 'components/markdown';
import { RoundBtn } from 'components/round-btn';
import { TcLawPage } from 'components/_page';
import { WorkDomain } from 'data/oblasti-rada';
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
  const allArticlesLoaded =
    newsArticles.length <= rowsShown * newsArticlesPerRow;
  const loadMoreNews = () => !allArticlesLoaded && setRowsShown(rowsShown + 2);
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
            <NewsArticleCard
              article={article}
              key={`article ${article.id}`}
            ></NewsArticleCard>
          ))}
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <RoundBtn disabled={allArticlesLoaded} onClick={loadMoreNews}>
          {allArticlesLoaded ? 'Nema više novosti' : 'Učitaj još novosti'}
        </RoundBtn>
      </div>
    </TcLawPage>
  );
};

function NewsArticleCard({ article }: { article: NewsArticle }) {
  const { title, body } = NewsUtil.getArticlePreview(article);
  const workDomain = WorkDomainUtil.findWorkDomainById(article.domain);
  return (
    <Card
      elevation={2}
      style={{
        display: 'flex',
        flexDirection: 'column',
        // padding: '1rem',
        // background: 'linear-gradient(to bottom, red, transparent)',
      }}
    >
      <CardContent>
        <div>
          {!!workDomain && <WorkDomainTag wd={workDomain} />}
          <h3>{title}</h3>
          {/* <p>{body}</p> */}
          <Markdown>{body}</Markdown>
        </div>
      </CardContent>
      {/* <div style={{ display: 'flex', flexGrow: 1 }}></div> */}
      <CardActions style={{ marginTop: 'auto', padding: '0 1rem 1rem 1rem' }}>
        <ReadMoreLink article={article} />
      </CardActions>
    </Card>
  );
}

export function ReadMoreLink({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/novosti/${article.id}`}>
      <a>Čitaj dalje...</a>
    </Link>
  );
}

function WorkDomainTag({ wd }: { wd: WorkDomain }) {
  // TODO: Test for article without workdomain?
  return (
    <p
      key={wd.title}
      style={{ textAlign: 'initial', margin: 0, color: 'grey' }}
      className="article-work-domain"
    >
      {WorkDomainUtil.getShortTitle(wd)}
    </p>
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
