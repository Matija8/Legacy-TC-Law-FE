import path from 'path';

export const newsArticles = [
  {
    mdPath: 'TODO-last.md',
    title: 'Izmene Zakona o porezima na imovinu',
    area: 'TODO',
  },
  {
    mdPath: '1.md',
    title: 'Novine u Zakonu o privrednim društvima',
    area: '',
  },
]
  .map((x) => ({ ...x, mdPath: fullMdPath(x.mdPath) }))
  .reverse();

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  md: string;
};

function fullMdPath(localPath: string) {
  return path.join(process.cwd(), 'data', 'news-markdowns', localPath);
}
