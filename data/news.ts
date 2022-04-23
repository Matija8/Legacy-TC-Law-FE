import { NewsUtil } from 'util/news-util';
import { WorkAreaId } from './oblasti-rada';

// TODO: Move `area` field to be in md files!
// YAML Front Matter metadata!!?
// TODO: Use index as id!?
// Get articles from fs.readdir?!!
// Order them by date matedata field, then by filename lexicographly if date is missing!??
const newsArticlesBase: {
  id: string;
  titleOverride?: string;
  area: WorkAreaId;
}[] = [
  {
    id: 'TODO-last',
    area: 'Porezi-carine-i-devizno-poslovanje',
  },
  {
    id: '1',
    area: 'Privredno-pravo',
  },
  {
    id: '2',
    area: 'Intelektualna-svojina-Industrija-zabave-IT',
  },
  {
    id: '3',
    area: 'resavanje-sporova',
  },
];

export const newsArticles = newsArticlesBase
  .map((x) => ({ ...x, fullMdPath: NewsUtil.getFullMdPathFromId(x.id) }))
  .reverse();

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  md: string;
};
