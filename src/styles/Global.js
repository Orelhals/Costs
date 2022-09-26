import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: #2f2f2f;
      margin: 0;
    }
    * {
      padding: 0;
      box-sizing: border-box;
      font-family: "Press Start 2P";
    }

    .page-container{
      min-height: calc(100vh - 50px);
      width: 100%; 
      margin-top: 82px;
    }
    .centralizer{
      width: 90vw;
      max-width: 1200px;
      margin: 0 auto;
    }
 `;
