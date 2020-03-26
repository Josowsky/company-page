import { ThemeProvider } from 'styled-components';

import GlobalStyles from './index.style';
import { Header } from '../components/Header/Header';
import { MainBanner } from '../components/MainBanner/MainBanner';

const theme = {
  main: '#4D01D4',
  secondary: '#253031',
  white: '#FFF',
  mobileBreakpoint: 500,
  tabletBreakpoint: 900,
};

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MainBanner />
    </ThemeProvider>
  );
}
