import React from 'react';
import { shallow } from 'enzyme';
import { Circle as CircleComponent } from '@react-google-maps/api';
import Circle from './Circle';

describe('Circle', () => {
  it('should render correctly', () => {
    const propsMock = {
      location: {
        lat: 1,
        lng: 2,
      },
      color: 'red',
      size: 50,
    };
    const wrapper = shallow(<Circle {...propsMock} />);

    const options = {
      strokeColor: propsMock.color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: propsMock.color,
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      zIndex: 1,
    };

    const expectedWrapper = (
      <CircleComponent center={propsMock.location} radius={propsMock.size} options={options} />
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
