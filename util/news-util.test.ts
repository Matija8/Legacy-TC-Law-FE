import { NewsArticle } from 'model/news-model';
import { NewsUtil } from './news-util';
import { NewsUtilServer } from './news-util-server';

describe('news util', () => {
  let article1: NewsArticle;
  let articles: NewsArticle[];
  let articleIds: string[];
  const validArticleId = '1';

  beforeAll(async () => {
    articleIds = await NewsUtilServer.getArticleIds();
    article1 = await NewsUtilServer.getArticleById(validArticleId);
    articles = await NewsUtilServer.getArticles();
  });

  test('\\n is whitespace', () => {
    expect(NewsUtil.isWhitespace('\n')).toBe(true);
  });

  test('getArticlePreview returns title with starting # stripped', async () => {
    const { title } = NewsUtil.getArticlePreview(article1);
    expect(title).toBe('Novine u Zakonu o privrednim društvima');
  });

  test('article has correct domain', async () => {
    const { domain } = article1;
    expect(domain).toBe(`Privredno-pravo`);
  });

  test('getArticleById throws if no article with id was found', async () => {
    // https://stackoverflow.com/questions/47144187/can-you-write-async-tests-that-expect-tothrow
    expect(
      async () => await NewsUtilServer.getArticleById('Non-existant id'),
    ).rejects.toThrow();
  });

  test('getArticleById throws if no article with id was found', async () => {
    expect(articleIds.length).toBe(23);
  });

  test('There is a same number of article ids & articles', () => {
    expect(articles.length).toBe(articleIds.length);
  });
});
