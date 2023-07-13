import { createGlobalStyle } from 'styled-components';
import { theme } from './themes/theme.styled';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

export const GlobalStyle = createGlobalStyle<{
  localVazirFont: NextFont;
  // localRobotoFont: NextFont;
}>`

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


* {
  box-sizing: border-box;
}

* a {
  font-family: ${({ localVazirFont }) => localVazirFont.style.fontFamily};
}

* button {
  font-family: ${({ localVazirFont }) =>
    localVazirFont.style.fontFamily} !important;
}

* select {
  font-family: ${({ localVazirFont }) => localVazirFont.style.fontFamily};
}

& input , textarea {
  font-family: ${({ localVazirFont }) =>
    localVazirFont.style.fontFamily} !important;

}

* strong {
  font-weight: 700;
}

html {
  scroll-behavior: smooth !important;
}



body {
  margin: 0;
  padding: 0;

  font-family: ${({ localVazirFont }) =>
    localVazirFont.style.fontFamily} !important;
  overflow-x: hidden !important;
  scroll-behavior: smooth;
  
  background-color: ${theme.backgroundColors.primary};
  color: ${theme.colors.textPrimary};

  & section {
    overflow-x: hidden !important;
  }
}

  ::-webkit-scrollbar-track { 
    /* -webkit-box-shadow: inset 0 0 6px #ee0979;  */
    background-color:  ${theme.backgroundColors.primary}; 
    border-radius: 8px; 
  } 
  
  ::-webkit-scrollbar { 
    width: 6px; 
    background-color: ${theme.backgroundColors.primary}; 
    border-radius: 8px; 
  } 
  
  ::-webkit-scrollbar-thumb { 
    border-radius: 8px; 
    /* -webkit-box-shadow: inset 0 0 6px rgba(238, 9, 120, 0.6745098039);  */
    
    /* background-image: linear-gradient(to top, ${
      theme.colors.textPrimary
    } 0%, ${theme.backgroundColors.primary} 100%);  */

  background-image: linear-gradient(to top, ${
    theme.backgroundColors.primary
  } 0%, ${theme.colors.textPrimary} 50%, ${
  theme.backgroundColors.primary
} 100%); 

  } 
`;

export const Container = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.sm}) {
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 2rem;
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
