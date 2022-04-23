import { NewsUtil } from 'util/news-util';
import { WorkDomainId } from './oblasti-rada';

// TODO: Get articles from fs.readdir??!
// Order them by date matedata field, then by filename lexicographly if date is missing!??
const newsArticleIds = ['TODO-last', '1', '2', '3'];

export const newsArticles = newsArticleIds
  .map((id) => ({ id, fullMdPath: NewsUtil.getFullMdPathFromId(id) }))
  .reverse();

export type NewsArticleMeta = typeof newsArticles[number];

export type NewsArticle = NewsArticleMeta & {
  domain: WorkDomainId;
  md: string;
};
