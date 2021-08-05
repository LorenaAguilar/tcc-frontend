import React from 'react';
import { shallow } from 'enzyme';
import ContainerStyles from './container.styles';
import Container from './container';

jest.mock('./container.styles');

mockUseStyles(ContainerStyles, ['container']);

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Container>home</Container>);

    const expectedWrapper = <main className="container">home</main>;
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
