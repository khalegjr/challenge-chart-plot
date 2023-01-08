import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;
