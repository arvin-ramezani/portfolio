import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#FFE000',
    primaryLight: '#7BA3E6',
    secondary: '#ffdada',
    textPrimary: '#CCD6F6',
    textSecondary: '#C2C9DD',
    dark: '#252525',
    blue: '#9747FF',
    blueLight: '#0077fe',
    white: '#f5f5f5',
    darkWhite: '#dbd8d8',
    buttonDisabled: 'rgba(0,0,0,.8)',
  },
  backgroundColors: {
    primary: '#0A192F',
    light: '#f5f5f5',
    dark: '#252525',
    blue: '#479bff',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};
