import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.main};
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.main};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 400;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
