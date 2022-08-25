import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../stitches/global';
import { darkTheme } from '../stitches/themes/dark';
import { lightTheme } from '../stitches/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();

  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      enableColorScheme
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
