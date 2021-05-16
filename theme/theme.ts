import { createMuiTheme, lighten } from '@material-ui/core/styles';

import colors from './colors';

const { blue, darkPink, lightPink, white, darkBlue, error } = colors;
const lightBlue = lighten(blue, 0.5);

const theme = createMuiTheme({
  typography: {
    fontFamily: ['DM Serif Display', 'Public Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: colors.darkPink,
    },
    secondary: {
      main: colors.blue,
      light: colors.lightBlue,
      dark: colors.darkBlue,
    },
    error: {
      main: error,
    },
  },
  overrides: {
    /** TYPOGRAPHY */
    MuiTypography: {
      h1: {
        fontFamily: 'MD Serif Display',
        fontSize: '72px',
        lineHeight: '72px',
        color: blue,
      },
      // h1 small
      subtitle1: {
        fontFamily: 'MD Serif Display',
        fontSize: '56px',
        lineHeight: '56px',
        color: blue,
      },
      h2: {
        fontFamily: 'MD Serif Display',
        fontSize: '48px',
        lineHeight: '56px',
        color: blue,
      },
      h3: {
        fontFamily: 'MD Serif Display',
        fontSize: '32px',
        lineHeight: '40px',
        color: blue,
      },
      // h3 small
      subtitle2: {
        fontFamily: 'Public Sans',
        fontSize: '18px',
        lineHeight: '25px',
        color: blue,
      },
      h4: {
        fontFamily: 'MD Serif Display',
        fontSize: '24px',
        lineHeight: '32px',
        color: blue,
      },
      body1: {
        fontFamily: 'Public Sans',
        fontSize: '15px',
        lineHeight: '28px',
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomColor: darkBlue,
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: darkBlue,
        '&.Mui-focused': {
          color: darkBlue,
        },
        '&.Mui-error': {
          color: darkPink,
        },
      },
    },
    MuiCheckbox: {
      root: {
        '&$checked': {
          color: `${darkPink} !important`,
        },
      },
    },
  },
});

export const lightTheme = createMuiTheme({
  ...theme,
  overrides: {
    ...theme.overrides,
    /** BUTTONS */
    MuiButton: {
      containedPrimary: {
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: 100,
        backgroundColor: darkPink,
        '&:hover': {
          backgroundColor: lightPink,
        },
        '&:disabled': {
          color: white,
          backgroundColor: lighten(darkPink, 0.7),
        },
      },
      outlinedPrimary: {
        borderRadius: 100,
        fontWeight: 'bold',
        textTransform: 'none',
        color: white,
        border: `1px solid ${white}`,
        '&:hover': {
          color: darkBlue,
          backgroundColor: white,
          border: `1px solid ${white}`,
        },
        '&:disabled': {
          color: lightBlue,
          border: `1px solid ${lightBlue}`,
        },
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  ...theme,
  overrides: {
    ...theme.overrides,
    /** BUTTONS */
    MuiButton: {
      containedPrimary: {
        borderRadius: 100,
        fontWeight: 'bold',
        textTransform: 'none',
        backgroundColor: darkPink,
        '&:hover': {
          backgroundColor: lightPink,
        },
        '&:disabled': {
          backgroundColor: lighten(darkPink, 0.7),
        },
      },
      outlinedPrimary: {
        borderRadius: 100,
        fontWeight: 'bold',
        textTransform: 'none',
        color: blue,
        border: `1px solid ${blue}`,
        '&:hover': {
          color: white,
          backgroundColor: blue,
          border: `1px solid ${blue}`,
        },
        '&:disabled': {
          color: lightBlue,
          border: `1px solid ${lightBlue}`,
        },
      },
    },
  },
});
