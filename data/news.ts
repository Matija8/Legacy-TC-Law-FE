import path from 'path';

export const newsArticles = [
  {
    mdPath: '1.md',
    title: 'Izmene Zakona o porezima na imovinu',
  },
].map((x) => ({ ...x, mdPath: fullMdPath(x.mdPath) }));

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  md: string;
};

function fullMdPath(localPath: string) {
  return path.join(process.cwd(), 'data', 'news-markdowns', localPath);
}
