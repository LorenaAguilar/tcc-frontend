import { Autocomplete } from '@material-ui/lab';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import FormikInputSelect from './FormikInputSelect';
import useFormikInputSelectStyles from './FormikInputSelect.styles';

jest.mock('./FormikInputSelect.styles');

mockUseStyles(useFormikInputSelectStyles, ['helperText']);

describe('FormikInputSelect', () => {
  const defaultProps = {
    name: 'name',
    label: 'label',
    required: false,
    placeholder: 'placeholder',
    className: 'classname',
    otions: ['value a', 'value b'],
  };
  it('should render the Field correctly', () => {
    const wrapper = shallow(<FormikInputSelect {...defaultProps} />);

    expect(wrapper.type()).toBe(Field);
    expect(wrapper.props()).toEqual({ name: defaultProps.name, children: expect.any(Function) });
  });

  it('should render the input correctly when the field have value', () => {
    const field = { onChange: jest.fn(), name: defaultProps.name };
    const form = { setValues: jest.fn(), setFieldTouched: jest.fn() };
    const meta = { touched: true, error: 'error' };

    const wrapper = shallow(<FormikInputSelect {...defaultProps} />).renderProp('children')({
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
        <Autocomplete
          value={field.value}
          onBlur={form.handleBlur}
          fullWidth
          autoComplete
          options={defaultProps.options}
        />
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
