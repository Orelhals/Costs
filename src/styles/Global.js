import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: black;
      height: 100%; 
    }
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }
 `;
