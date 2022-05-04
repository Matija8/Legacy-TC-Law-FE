export namespace MarkdownUtil {
  export function removeFootnotes(text: string) {
    return text.replaceAll(/\[\^[^\]]*]/g, '');
  }
}
