import { TcLawPage } from 'components/_page';
import { NewsArticle, NewsArticleMeta, newsArticles } from 'data/news';
import fs from 'fs/promises';
import ReactMarkdown from 'react-markdown';

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
      newsArticle: await getArticleWithMarkdown(newsArticle),
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
