import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body,
  html{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }

  .App{
    width: 70%;
    margin: 0 auto;
    position: relative;

    nav{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: sticky;
      top: 0;
      left: 0;
      background-color: white;
      padding: 1rem;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
      
      .filter-btns{
        display: flex;
        margin-top: 1rem;

        button{
          margin: 0 1rem;
        }
      }
    }

    .loader{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);

      .loader-content{
        width: 10rem;
        height: 10rem;
        background-color: white;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default GlobalStyles;
