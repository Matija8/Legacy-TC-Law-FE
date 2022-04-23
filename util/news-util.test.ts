import { NewsArticle, newsArticles } from 'data/news';
import { NewsUtil } from './news-util';

describe('news util', () => {
  let article1: NewsArticle;
  beforeAll(async () => {
    const mdPath = NewsUtil.fullMdPath('1.md');
    article1 = await NewsUtil.getArticleWithMarkdown(
      newsArticles.find((article) => article.mdPath === mdPath)!,
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
