import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;
  }
`;

export { GlobalStyle };