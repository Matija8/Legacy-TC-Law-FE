import fs from 'fs/promises';
import { NewsArticle, NewsArticleMeta } from 'data/news';

export namespace NewsUtilServer {
  export async function getArticleWithMarkdown(
    newsArticle: NewsArticleMeta,
  ): Promise<NewsArticle> {
    async function getArticleMarkdown(newsArticle: NewsArticleMeta) {
      return await fs.readFile(newsArticle.fullMdPath, 'utf-8');
    }
    return {
      ...newsArticle,
      md: await getArticleMarkdown(newsArticle),
    };
  }
}
