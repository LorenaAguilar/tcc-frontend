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
          lineHeight: '1.43',
          letterSpacing: '0.01071em',
          backgroundColor: '#fafafa',
          fontSize: '0.875rem',

          '&::backdrop': {
            backgroundColor: '#fafafa',
          },
        },
      },
    },
  },
});

export default theme;
