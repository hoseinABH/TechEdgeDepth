import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  materialLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { useThemeState } from 'providers/themeProvider';

const CodeBlock = ({ language, value }) => {
  const theme = useThemeState();
  return (
    <SyntaxHighlighter
      language={language}
      style={theme === 'dark' ? materialDark : materialLight}
    >
      {value}
    </SyntaxHighlighter>
  );
};

const MyImage = ({ alt, src, title }) => {
  return (
    <Image
      width={600}
      height={300}
      layout="responsive"
      alt={alt}
      src={src}
      title={title}
    />
  );
};
const MyLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-blue-600 hover:underline">{children}</a>
    </Link>
  );
};
export type Props = {
  source: any;
};

/**
 * @component
 */
function Markdown({ source }: Props) {
  const renderers = {
    image: MyImage,
    link: MyLink,
    code: CodeBlock,
  };

  return (
    <ReactMarkdown
      className="break-words sm:overflow-x-hidden overflow-auto text-justify"
      plugins={[gfm]}
      renderers={renderers}
      children={source}
    />
  );
}

export default Markdown;
