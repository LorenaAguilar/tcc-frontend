import InputLabelMUI from '@material-ui/core/InputLabel';
import { shallow } from 'enzyme';
import React from 'react';
import InputLabel from './InputLabel';
import InputLabelStyles from './InputLabel.styles';

jest.mock('./InputLabel.styles');
jest.mock('effector-react');

mockUseStyles(InputLabelStyles, ['labelStyle']);

describe('InputLabel', () => {
  const defaultProps = {
    label: 'label',
    hasError: true,
    required: false,
  };
  it('should render correctly when is  not required', () => {
    const wrapper = shallow(<InputLabel {...defaultProps} />);

    const expectedWrapper = (
      <InputLabelMUI className="labelStyle" error={defaultProps.hasError}>
        {defaultProps.label}
      </InputLabelMUI>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
  it('should render correctly when is required', () => {
    const wrapper = shallow(<InputLabel {...defaultProps} required />);

    const expectedWrapper = (
      <InputLabelMUI className="labelStyle" error={defaultProps.hasError}>
        {`${defaultProps.label}*`}
      </InputLabelMUI>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
