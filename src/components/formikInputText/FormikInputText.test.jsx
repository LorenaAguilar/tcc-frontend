import TextField from '@material-ui/core/TextField';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import FormikInputText from './formikInputText';
import useFormikInputTextStyles from './formikInputText.styles';

jest.mock('./formikInputText.styles');

mockUseStyles(useFormikInputTextStyles, ['helperText']);

describe('FormikInputText', () => {
  const defaultProps = {
    name: 'name',
    label: 'label',
    required: false,
    placeholder: 'placeholder',
    className: 'classname',
  };
  it('should render the Field correctly', () => {
    const wrapper = shallow(<FormikInputText {...defaultProps} />);

    expect(wrapper.type()).toBe(Field);
    expect(wrapper.props()).toEqual({ name: defaultProps.name, children: expect.any(Function) });
  });

  it('should render the input correctly when the field have no value', () => {
    const field = { onChange: jest.fn(), value: 'value', name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputText {...defaultProps} />).renderProp('children')({
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
        <TextField
          helperText={Boolean(meta.touched && meta.error) && meta.error}
          fullWidth
          variant="outlined"
          placeholder={defaultProps.placeholder}
          className={defaultProps.className}
          onChange={field.onChange}
          error={Boolean(meta.touched && meta.error)}
          value={field.value}
          FormHelperTextProps={{ classes: { root: 'helperText' } }}
          name={field.name}
        />
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render the input correctly when the field have value', () => {
    const field = { onChange: jest.fn(), name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputText {...defaultProps} />).renderProp('children')({
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
        <TextField
          helperText={Boolean(meta.touched && meta.error) && meta.error}
          fullWidth
          variant="outlined"
          placeholder={defaultProps.placeholder}
          className={defaultProps.className}
          onChange={field.onChange}
          error={Boolean(meta.touched && meta.error)}
          value=""
          FormHelperTextProps={{ classes: { root: 'helperText' } }}
          name={field.name}
        />
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle onBlur event', () => {
    const field = { onChange: jest.fn(), value: 'value', name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };
    const wrapper = shallow(<FormikInputText {...defaultProps} />).renderProp('children')({
      field,
      form,
      meta,
    });

    const eventMock = { target: { value: 'new value' } };
    wrapper.find(TextField).invoke('onBlur')(eventMock);

    expect(form.setValues).toHaveBeenCalledTimes(1);
    expect(form.setValues).toHaveBeenCalledWith({ name: eventMock.target.value });
    expect(form.setFieldTouched).toHaveBeenCalledTimes(1);
    expect(form.setFieldTouched).toHaveBeenCalledWith(defaultProps.name, true, true);
  });
});
