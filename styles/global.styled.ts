import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.styled';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

export const GlobalStyle = createGlobalStyle<{ localFont: NextFont }>`

/* CSS Reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* Vazir Fonts */

/* @font-face {
  font-family: Vazir;
  
  src: url('/fonts/vazir/Vazir-Thin.ttf') format('truetype');
  font-weight: 100;
}
      
@font-face {
  font-family: Vazir;
  
  src: url('/fonts/vazir/Vazir-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Vazir;
  
    src: url('/fonts/vazir/Vazir-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: Vazir;

    src: url('/fonts/vazir/Vazir-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Vazir;

    src: url('/fonts/vazir/Vazir-Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: Vazir;

    src: url('/fonts/vazir/Vazir-Black.ttf') format('truetype');
  font-weight: 900;
} */





/* Roboto Fonts */
@font-face {
  font-family: Roboto;
  
  src: url('/fonts/roboto/Roboto-Thin.ttf') format('truetype');
  font-weight: 100;
}
      
@font-face {
  font-family: Roboto;
  
  src: url('/fonts/roboto/Roboto-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Roboto;
  
    src: url('/fonts/roboto/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/roboto/Roboto-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/roboto/Roboto-Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/roboto/Roboto-Black.ttf') format('truetype');
  font-weight: 900;
}

* {
  box-sizing: border-box;
}

* button {
  font-family: ${({ localFont }) => localFont.style.fontFamily} !important;
}

& input , textarea {
  font-family: ${({ localFont }) => localFont.style.fontFamily} !important;

}

html {
  scroll-behavior: smooth !important;
}

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Vazir;
    overflow-x: hidden !important;
    scroll-behavior: smooth;
    
    background-color: ${theme.backgroundColors.primary};
    color: ${theme.colors.textPrimary};

    & section {
      overflow-x: hidden !important;
    }
  }

`;

export const Container = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden !important;

  @media (min-width: ${theme.breakpoints.sm}) {
  }

  @media (min-width: ${theme.breakpoints.md}) {
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
  }
`;
