import { NewsArticle, newsArticles } from 'data/news';
import { NewsUtil } from './news-util';
import { NewsUtilServer } from './news-util-server';

describe('news util', () => {
  let article1: NewsArticle;
  beforeAll(async () => {
    const mdPath = NewsUtil.getFullMdPathFromId('1');
    article1 = await NewsUtilServer.getArticleWithMarkdown(
      newsArticles.find((article) => article.fullMdPath === mdPath)!,
    );
  });

  test('\\n is whitespace', () => {
    expect(NewsUtil.isWhitespace('\n')).toBe(true);
  });

  test('mdToPreview returns title with starting # stripped', async () => {
    const { md } = article1;
    const expectedArticle1Title = 'Novine u Zakonu o privrednim društvima';
    expect(md.split('\n')[0]).toBe(`# ${expectedArticle1Title}`);

    const { title } = NewsUtil.mdToPreview(md);
    expect(title).toBe(expectedArticle1Title);
  });
});
