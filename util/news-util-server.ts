import fs from 'fs/promises';
import { NewsArticle, NewsArticleMeta } from 'data/news';

import matter from 'gray-matter';

export namespace NewsUtilServer {
  export async function getArticleWithMarkdown(
    newsArticle: NewsArticleMeta,
  ): Promise<NewsArticle> {
    const mdText = await getArticleMarkdown(newsArticle);
    const { content, data } = matter(mdText);
    return {
      ...newsArticle,
      md: content,
      domain: data.domain ?? null,
    };
  }

  async function getArticleMarkdown(newsArticle: NewsArticleMeta) {
    return await fs.readFile(newsArticle.fullMdPath, 'utf-8');
  }
}
