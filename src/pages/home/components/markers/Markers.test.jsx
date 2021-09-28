import { MarkerClusterer } from '@react-google-maps/api';
import { shallow } from 'enzyme';
import React from 'react';
import Markers from './Markers';

jest.mock('../../../../assets/AlertIcon.svg');

describe('Markers', () => {
  it('should render Marke correctly when there is no locations', () => {
    const wrapper = shallow(<Markers />);

    const expectedWrapper = (
      <>
        <MarkerClusterer />
        {null}
      </>
    );

    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
