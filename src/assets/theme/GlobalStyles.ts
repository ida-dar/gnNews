import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import '../../vendors/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${theme.font.fontMain};
    background-color: ${theme.colors.bgColor};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a, a:hover, a:visited {
    text-decoration: none;
  }
`;

export default GlobalStyle;
