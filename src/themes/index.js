import { createTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
  },
});

export default theme;
