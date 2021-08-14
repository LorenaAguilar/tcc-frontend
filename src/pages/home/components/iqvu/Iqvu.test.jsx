import React from 'react';
import { shallow } from 'enzyme';
import Circle from '../circle/Circle';
import Iqvu from './Iqvu';

describe('Circle', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Iqvu />);

    const expectedWrapper = (
      <>
        <Circle
          location={{ lat: -19.801664961293064, lng: -43.93884010963926 }}
          size={300}
          color="red"
        />
        <Circle
          location={{ lat: -19.797284810269978, lng: -43.92042411918701 }}
          size={600}
          color="orange"
        />
        <Circle
          location={{ lat: -19.796284810269978, lng: -43.90803511948701 }}
          size={500}
          color="yellow"
        />
      </>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
