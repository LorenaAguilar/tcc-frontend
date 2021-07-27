import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';

describe('App', () => {
  it('should render AppRouter correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.type()).toBe(AppRouter);
    expect(wrapper.props()).toEqual({});
  });
});
