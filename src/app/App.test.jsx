import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import AppRouter from './AppRouter';
import theme from '../themes';

describe('App', () => {
  it('should render AppRouter correctly', () => {
    const wrapper = shallow(<App />);

    const expectedWrapper = (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    );

    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
