import { TcLawPage } from 'components/_page';
import { NewsArticle, newsArticles } from 'data/news';
import ReactMarkdown from 'react-markdown';
import { NewsUtilServer } from 'util/news-util-server';

const newsArticlePage = ({ newsArticle }: { newsArticle: NewsArticle }) => {
  return (
    <TcLawPage title="Novosti">
      {/* <h2 className="heading-underlined">Novosti</h2> */}

      <section style={{ margin: '40px 0 70px' }}>
        <ReactMarkdown>{newsArticle.md}</ReactMarkdown>
      </section>
    </TcLawPage>
  );
};

export default newsArticlePage;

export async function getStaticPaths() {
  const paths = {
    paths: newsArticles.map(({}, idx) => ({
      params: { newsArticleId: `${idx}` },
    })),
    fallback: false,
  };
  return paths;
}

export async function getStaticProps({
  params,
}: {
  params: { newsArticleId: string };
}) {
  const newsArticle = newsArticles[Number(params.newsArticleId)];
  return {
    props: {
      newsArticle: await NewsUtilServer.getArticleWithMarkdown(newsArticle),
    },
  };
}
