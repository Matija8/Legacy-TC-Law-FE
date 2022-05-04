import { MarkdownUtil } from './markdown-util';

test('removeFootnotes removes [^1]', () => {
  expect(
    MarkdownUtil.removeFootnotes(
      '...(u daljem tekstu: Zakon)[^1], počev od...',
    ),
  ).toBe('...(u daljem tekstu: Zakon), počev od...');
});
