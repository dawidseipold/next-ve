// Libs
import { ThemeProvider } from 'next-themes';

// Types
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

// Styles
import '../../styles/globals.css';
import { colorProperties } from '../../sprinkles.css';

// Type for pages with layout
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// App component interface
interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: IAppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
