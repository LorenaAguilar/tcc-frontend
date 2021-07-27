import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './AppRouter';
import theme from '../themes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
