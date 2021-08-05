import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';
import AboutUsInformation from './components/aboutUs/AboutUsInformation';

describe('AboutUs', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AboutUs />);

    const expectedWrapper = <AboutUsInformation />;
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
