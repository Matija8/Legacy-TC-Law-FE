import markdownToTxt from 'markdown-to-txt';

export namespace NewsUtil {
  function takeUntilNthNewLine(text: string, n: number) {
    let res = '';
    let nlRepetition = 0;
    for (const char of text) {
      if (char === '\n') {
        nlRepetition += 1;
        if (nlRepetition >= n) return res;
      }
      res += char;
    }
    return res;
  }

  export function mdToTxt(mdText: string) {
    return markdownToTxt(mdText);
  }

  export function mdToPreview(mdText: string) {
    let { title, body } = splitMarkdownIntoTitleAndContent(mdText);
    body = NewsUtil.takeWordsUntilNthCharacter(body, 150);
    body = mdToTxt(body);
    return { title, body };
  }

  function splitMarkdownIntoTitleAndContent(mdText: string) {
    // TODO
    const lines = mdText.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 1) {
      throw Error();
    }
    const title = (() => {
      let titleLine = lines[0].trim();
      const lastStartingHashIndex = (() => {
        let startIndex = 0;
        while (titleLine[startIndex] === '#') {
          startIndex++;
        }
        return startIndex;
      })();
      return titleLine.slice(lastStartingHashIndex);
    })();
    return {
      title,
      body: lines.slice(1).join('\n\n'),
    };
  }

  export function takeWordsUntilNthCharacter(text: string, n: number) {
    if (text.length <= n) {
      return text;
    }
    const lastWhitespaceCharIndex = (() => {
      const firstNChars = text.slice(0, n);
      for (let i = n - 1; i > 0; i--) {
        const letter = firstNChars[i];
        if (isWhitespace(letter)) {
          return i;
        }
      }
      throw Error();
    })();
    return text.slice(0, lastWhitespaceCharIndex);
  }
}

function isWhitespace(char: string) {
  return char.trim() === '';
}
