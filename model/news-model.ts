import { WorkDomainId } from 'data/oblasti-rada';

export type NewsArticle = {
  id: string;
  domain: WorkDomainId;
  md: string;
};
