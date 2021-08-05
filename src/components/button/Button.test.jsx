import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonStyles from './Button.styles';
import Button from './Button';

jest.mock('./Button.styles');

mockUseStyles(ButtonStyles, ['container']);

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button title="home" />);

    const expectedWrapper = (
      <ButtonComponent className="container">
        <Typography>home</Typography>
      </ButtonComponent>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
