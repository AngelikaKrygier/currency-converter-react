import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${"https://i.postimg.cc/7hysYXJ9/background.png"});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    font-size: 20px;
    line-height: 2;
    text-align: left;
    margin: 20px auto;
    max-width: 700px;
    padding: 20px;
  }

  .container__paragraph {
    margin: 0px;
    font-style: italic;
    font-size: 15px;
  }
`;
