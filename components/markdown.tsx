import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        u: ({ node, ...props }) => (
          <u style={{ textDecoration: 'underline' }} {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
