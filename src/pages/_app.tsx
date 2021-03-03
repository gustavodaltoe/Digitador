import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { theme } from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
