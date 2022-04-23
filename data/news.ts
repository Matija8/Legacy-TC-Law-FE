import { NewsUtil } from 'util/news-util';
import { WorkAreaId } from './oblasti-rada';

const newsArticlesBase: {
  mdPath: string;
  titleOverride?: string;
  area: WorkAreaId;
}[] = [
  {
    mdPath: 'TODO-last.md',
    area: 'Porezi-carine-i-devizno-poslovanje',
  },
  {
    mdPath: '1.md',
    area: 'Privredno-pravo',
  },
  {
    mdPath: '2.md',
    area: 'Intelektualna-svojina-Industrija-zabave-IT',
  },
  {
    mdPath: '3.md',
    area: 'resavanje-sporova',
  },
];

export const newsArticles = newsArticlesBase
  .map((x) => ({ ...x, mdPath: NewsUtil.fullMdPath(x.mdPath) }))
  .reverse();

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  md: string;
};
