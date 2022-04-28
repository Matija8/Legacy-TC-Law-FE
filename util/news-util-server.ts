import fs from 'fs/promises';
import matter from 'gray-matter';
import { NewsArticle } from 'model/news-model';
import { NewsUtil } from './news-util';

export namespace NewsUtilServer {
  export async function getArticleIds() {
    const fileNames = await fs.readdir(NewsUtil.getNewsArticlesDirPath());
    const articleIds = fileNames
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.substring(0, f.lastIndexOf('.md')));
    return articleIds.sort((a, b) => Number(a) - Number(b)).reverse();
  }

  export async function getArticleById(
    newsArticleId: string,
  ): Promise<NewsArticle> {
    const mdText = await getArticleMarkdown(newsArticleId);
    const { content, data } = matter(mdText);
    return {
      id: newsArticleId,
      md: content,
      domain: data.domain ?? null,
    };
  }

  export async function getArticles() {
    const ids = await getArticleIds();
    return await Promise.all(
      ids.map(async (articleId) => await getArticleById(articleId)),
    );
  }

  async function getArticleMarkdown(articleId: string) {
    return await fs.readFile(
      NewsUtil.getFullFsMdPathFromId(articleId),
      'utf-8',
    );
  }
}
