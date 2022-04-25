import { TcLawPage } from 'components/_page';
import { NewsArticle } from 'model/news-model';
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
  // TODO: Use title as path (or use title as id??)?!
  const staticPathsRet = {
    paths: (await NewsUtilServer.getArticleIds()).map((id) => ({
      params: { newsArticleId: id },
    })),
    fallback: false,
  };
  return staticPathsRet;
}

export async function getStaticProps({
  params,
}: {
  params: { newsArticleId: string };
}) {
  return {
    props: {
      newsArticle: await NewsUtilServer.getArticleById(params.newsArticleId),
    },
  };
}
