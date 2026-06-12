import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size:16px;
  }

  body{
    font-family:${({ theme }) => theme.fonts.primary};
    background:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.text};
    min-height:100vh;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }

  button,
  input,
  textarea{
    font-family:${({ theme }) => theme.fonts.secondary}
     color:${({ theme }) => theme.colors.primary};
  }

  img{
    display:block;
    max-width:100%;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  ul{
    list-style:none;
  }
`;