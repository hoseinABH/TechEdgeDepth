import NavBar from 'components/NavBar';
import Head from 'next/head';
import { useThemeState } from 'providers/themeProvider';
import { ReactNode } from 'react';

export type DefaultTemplateProps = {
  children: ReactNode;
  title?: string;
  maxWidth?: string;
};
function DefaultTemplate({ maxWidth, children, title }: DefaultTemplateProps) {
  const theme = useThemeState();
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Head>
        <title>{title}</title>
        <base target="_blank" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="theme-color" content="#111827" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="a website for reading and being up to date in last tech tricks..."
        />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:site_name" content="DeepDev" />
        <meta property="og:url" content="https://deep-eta.vercel.app/" />
        <meta
          property="og:description"
          content="a website for reading and being up to date in last tech tricks..."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/favicon.png"></meta>
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-all duration-300  h-full pb-8">
        <NavBar />
        <div className={`max-w-${maxWidth} px-4 mx-auto mt-4`}>{children}</div>
        <footer className="pt-8">
          <p className="text-center dark:text-gray-300 text-gray-900">
            Made With ❤ By Me
          </p>
        </footer>
      </div>
    </div>
  );
}
export default DefaultTemplate;
