import { createTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createTheme({
  palette,
  typography,
  overrides,
});

export default theme;
