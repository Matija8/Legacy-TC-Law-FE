import { NewsUtil } from './news-util';

describe('news util', () => {
  test('\\n is whitespace', () => {
    expect(NewsUtil.isWhitespace('\n')).toBe(true);
  });

  // test('', () => {});
});
