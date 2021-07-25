import React from 'react';
import { shallow } from 'enzyme';
import HomeRoute from './HomeRoute';
import logo from '../../assets/logo.svg';

describe('HomeRoute', () => {
  it('should render correctly', async () => {
    const wrapper = shallow(<HomeRoute />);

    const expectedWrapper = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testing</p>
        </header>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
