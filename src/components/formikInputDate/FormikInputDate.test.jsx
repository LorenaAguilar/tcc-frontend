import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import FormikInputDate from './FormikInputDate';
import useFormikInputDateStyles from './FormikInputDate.styles';

jest.mock('./FormikInputDate.styles');

mockUseStyles(useFormikInputDateStyles, ['helperText']);

describe('FormikInputDate', () => {
  const defaultProps = {
    name: 'name',
    label: 'label',
    required: false,
    placeholder: 'placeholder',
    className: 'classname',
  };

  it('should render the Field correctly', () => {
    const wrapper = shallow(<FormikInputDate {...defaultProps} />);

    expect(wrapper.type()).toBe(Field);
    expect(wrapper.props()).toEqual({ name: defaultProps.name, children: expect.any(Function) });
  });

  it('should render the input correctly when the field have no value', () => {
    const field = {
      onChange: jest.fn(),
      value: 'value',
      name: defaultProps.name,
      onBlur: jest.fn(),
    };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputDate {...defaultProps} />).renderProp('children')({
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
        <MuiPickersUtilsProvider>
          <KeyboardDatePicker
            format="dd/MM/yyyy"
            mask="__/__/____"
            value={field.value}
            clearable
            name={field.name}
            onBlur={field.onBlur}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            inputVariant="outlined"
            error={Boolean(meta.touched && meta.error)}
            fullWidth
            FormHelperTextProps={{ classes: { root: 'helperText' } }}
            helperText={Boolean(meta.touched && meta.error) && meta.error}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle on Change', () => {
    const field = {
      onChange: jest.fn(),
      value: 'value',
      name: defaultProps.name,
      onBlur: jest.fn(),
    };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn(), setFieldValue: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputDate {...defaultProps} />).renderProp('children')({
      field,
      form,
      meta,
    });

    const eventMock = { target: { value: 'new value' } };
    wrapper.find(KeyboardDatePicker).invoke('onChange')(eventMock);

    expect(form.setFieldValue).toHaveBeenCalledTimes(1);
    expect(form.setFieldValue).toHaveBeenCalledWith('name', eventMock);
  });
});
