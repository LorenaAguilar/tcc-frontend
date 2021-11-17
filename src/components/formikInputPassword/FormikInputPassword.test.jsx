import { FormHelperText } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import FormikInputPassword from './FormikInputPassword';
import useFormikInputPasswordStyles from './FormikInputPassword.styles';

jest.mock('./FormikInputPassword.styles');

mockUseStyles(useFormikInputPasswordStyles, ['helperText']);

describe('FormikInputPassword', () => {
  const defaultProps = {
    name: 'name',
    label: 'label',
    required: false,
    placeholder: 'placeholder',
    className: 'classname',
  };

  it('should render the Field correctly', () => {
    const wrapper = shallow(<FormikInputPassword {...defaultProps} />);

    expect(wrapper.type()).toBe(Field);
    expect(wrapper.props()).toEqual({ name: defaultProps.name, children: expect.any(Function) });
  });

  it('should render the input correctly when the field have no value', () => {
    const field = { onChange: jest.fn(), name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputPassword {...defaultProps} />).renderProp('children')({
      field,
      form,
      meta,
    });

    const expectedWrapper = (
      <div>
        <InputLabel
          label={defaultProps.label}
          required={defaultProps.required}
          hasError={Boolean(meta.touched && meta.error)}
        />
        <OutlinedInput
          className={defaultProps.className}
          name={field.name}
          placeholder={defaultProps.placeholder}
          type="password"
          value=""
          fullWidth
          onChange={field.onChange}
          error={Boolean(meta.touched && meta.error)}
        />
        <FormHelperText error={Boolean(meta.touched && meta.error)} className="helperText">
          {Boolean(meta.touched && meta.error) && meta.error}
        </FormHelperText>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render the input correctly when the field have value', () => {
    const field = { onChange: jest.fn(), name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputPassword {...defaultProps} />).renderProp('children')({
      field,
      form,
      meta,
    });

    const expectedWrapper = (
      <div>
        <InputLabel
          label={defaultProps.label}
          required={defaultProps.required}
          hasError={Boolean(meta.touched && meta.error)}
        />
        <OutlinedInput
          className={defaultProps.className}
          name={field.name}
          placeholder={defaultProps.placeholder}
          type="password"
          value={field.value}
          fullWidth
          onChange={field.onChange}
          error={Boolean(meta.touched && meta.error)}
        />
        <FormHelperText error={Boolean(meta.touched && meta.error)} className="helperText">
          {Boolean(meta.touched && meta.error) && meta.error}
        </FormHelperText>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
