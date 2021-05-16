import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

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
  },
});

export default theme;
