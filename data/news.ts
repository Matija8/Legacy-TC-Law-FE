import path from 'path';
import { WorkAreaId } from './oblasti-rada';

const newsArticlesBase: { mdPath: string; title: string; area: WorkAreaId }[] =
  [
    {
      mdPath: 'TODO-last.md',
      title: 'Izmene Zakona o porezima na imovinu',
      area: 'Porezi-carine-i-devizno-poslovanje',
    },
    {
      mdPath: '1.md',
      title: 'Novine u Zakonu o privrednim društvima',
      area: 'Privredno-pravo',
    },
    {
      mdPath: '2.md',
      title: 'Novi Zakon o žigovima',
      area: 'Intelektualna-svojina-Industrija-zabave-IT',
    },
  ];

export const newsArticles = newsArticlesBase
  .map((x) => ({ ...x, mdPath: fullMdPath(x.mdPath) }))
  .reverse();

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  md: string;
};

function fullMdPath(localPath: string) {
  return path.join(process.cwd(), 'data', 'news-markdowns', localPath);
}
