import React from 'react';
import { shallow } from 'enzyme';
import ContainerStyles from './Container.styles';
import Container from './Container';

jest.mock('./Container.styles');

mockUseStyles(ContainerStyles, ['container']);

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Container>home</Container>);

    const expectedWrapper = <main className="container">home</main>;
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
