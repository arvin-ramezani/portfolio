import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.styled';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`

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


   @font-face {
  font-family: Roboto;
  
  src: url('/fonts/Roboto/Roboto-Thin.ttf') format('truetype');
  font-weight: 100;
}
      
@font-face {
  font-family: Roboto;
  
  src: url('/fonts/Roboto/Roboto-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Roboto;
  
    src: url('/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/Roboto/Roboto-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: Roboto;

    src: url('/fonts/Roboto/Roboto-Black.ttf') format('truetype');
  font-weight: 900;
}

* {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    overflow-x: hidden !important;
    
    background-color: ${theme.backgroundColors.primary};
    color: ${theme.colors.textSecondary};

    & section {
      overflow-x: hidden !important;
    }
  }

  /* a {
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
    
  } */



`;

export const Container = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden !important;

  @media (min-width: ${theme.breakpoints.sm}) {
    /* max-width: 600px; */
  }

  @media (min-width: ${theme.breakpoints.md}) {
    /* max-width: 900px; */
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    /* max-width: 1200px; */
  }
`;
