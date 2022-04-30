import { TcLawPage } from 'components/_page';
import { NewsArticle } from 'model/news-model';
import { NewsUtilServer } from 'util/news-util-server';
import { Markdown } from '../../components/markdown';

const newsArticlePage = ({ newsArticle }: { newsArticle: NewsArticle }) => {
  return (
    <TcLawPage title="Novosti">
      {/* <style jsx>{`
        .react-markdown > h2 {
          margin-top: 2rem;
        }
      `}</style> */}
      {/* <h2 className="heading-underlined">Novosti</h2> */}

      <section className="react-markdown" style={{ margin: '40px 0 70px' }}>
        <Markdown>{newsArticle.md}</Markdown>
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
