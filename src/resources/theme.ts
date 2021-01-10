import { createMuiTheme, Theme } from '@material-ui/core/styles';

// Main Theme
const maintheme: Theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#9AC802',
      main: '#9AC802',
      light: '#9AC802'
    },
    secondary: {
      main: '#9AC802'
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    common: {
      black: '#02213B'
    },
    divider: "#272A2D"
  },
  typography: {
    fontFamily: "'Roboto', sans-serif"
  }, 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});

// Light Theme
const lighttheme: Theme = createMuiTheme({
  ...maintheme
});

// Dark Theme
const darktheme: Theme = createMuiTheme({
  ...maintheme,
  palette: {
    ...maintheme.palette,
    type: 'dark',
    background: {
      paper: '#272A2D',
      default: '#181B1C'
    },
  }
});

export {
  maintheme,
  darktheme,
  lighttheme,
};