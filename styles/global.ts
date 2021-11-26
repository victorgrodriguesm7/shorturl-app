import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #__next {
    min-height: 100vh;
    background: ${props => props.theme.colors.neutral.darkViolet}
  }
  
  #__next {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export { GlobalStyle };