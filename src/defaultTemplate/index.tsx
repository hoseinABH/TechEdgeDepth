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
        <link rel="icon" href="/favicon.ico" />
        <base target="_blank" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen  h-full pb-8">
        <NavBar />
        <div className={`max-w-${maxWidth} px-4 mx-auto mt-4`}>{children}</div>
      </div>
    </div>
  );
}
export default DefaultTemplate;
