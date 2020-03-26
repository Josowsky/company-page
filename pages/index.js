import { ThemeProvider } from 'styled-components';

import GlobalStyles from './index.style';
import { Header } from '../components/Header/Header';

const theme = {
  main: '#4D01D4',
  secondary: '#253031',
  white: '#FFF',
};

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
