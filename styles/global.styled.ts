import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.styled';

export const GlobalStyle = createGlobalStyle`
   @font-face {
  font-family: Vazir;
  src: url('/fonts/vazir/Vazir-Regular.eot');
  src: url('/fonts/vazir/Vazir-Regular.eot?#iefix') format('embedded-opentype'),
       url('/fonts/vazir/Vazir-Regular.woff') format('woff'),
       url('/fonts/vazir/Vazir-Regular.woff2') format('woff2'),
       url('/fonts/vazir/Vazir-Regular.ttf') format('truetype');
  font-weight: normal;
}
      
@font-face {
  font-family: Vazir;
  src: url('/fonts/vazir/Vazir-Bold.eot');
  src: url('/fonts/vazir/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/vazir/Vazir-Bold.woff') format('woff'),
       url('/fonts/vazir/Vazir-Bold.woff2') format('woff2'),
       url('/fonts/vazir/Vazir-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Vazir;
  src: url('/fonts/vazir/Vazir-Light.eot');
  src: url('/fonts/vazir/Vazir-Light.eot?#iefix') format('embedded-opentype'),
       url('/fonts/vazir/Vazir-Light.woff') format('woff'),
       url('/fonts/vazir/Vazir-Light.woff2') format('woff2'),
       url('/fonts/vazir/Vazir-Light.ttf') format('truetype');
  font-weight: 300;
}

* {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    background-color: #0A192F;

    font-family: Roboto;
    overflow-x: hidden !important;
  }

  a {
    text-underline-offset: 6px;
    font-size: .8rem;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style-type: none;
    
  }


  .container {
    padding: 1rem .5rem;
    margin: 0 auto;

    max-width: 380px;

    

    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 600px;
    }
    
    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 900px;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 1000px;
    }
    
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: 1200px;
    }
    
  }
`;
