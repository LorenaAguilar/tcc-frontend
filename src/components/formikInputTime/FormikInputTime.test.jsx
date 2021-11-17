import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import FormikInputTime from './FormikInputTime';
import useFormikInputTimeStyles from './FormikInputTime.styles';

jest.mock('./FormikInputTime.styles');

mockUseStyles(useFormikInputTimeStyles, ['helperText']);

describe('FormikInputTime', () => {
  const defaultProps = {
    name: 'name',
    label: 'label',
    required: false,
    placeholder: 'placeholder',
    className: 'classname',
  };

  it('should render the Field correctly', () => {
    const wrapper = shallow(<FormikInputTime {...defaultProps} />);

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

    const wrapper = shallow(<FormikInputTime {...defaultProps} />).renderProp('children')({
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
          <KeyboardTimePicker
            clearable
            value={field.value}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            inputVariant="outlined"
            onBlur={field.onBlur}
            name={field.name}
            error={Boolean(meta.touched && meta.error)}
            fullWidth
            FormHelperTextProps={{ classes: { root: 'helperText' } }}
            ampm={false}
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

    const wrapper = shallow(<FormikInputTime {...defaultProps} />).renderProp('children')({
      field,
      form,
      meta,
    });

    const eventMock = { target: { value: 'new value' } };
    wrapper.find(KeyboardTimePicker).invoke('onChange')(eventMock);

    expect(form.setFieldValue).toHaveBeenCalledTimes(1);
    expect(form.setFieldValue).toHaveBeenCalledWith('name', eventMock, false);
  });
});
