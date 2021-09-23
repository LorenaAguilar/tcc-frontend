import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { Field, FieldProps } from 'formik';
import React from 'react';
import useFormikInputSelectStyles from './FormikInputSelect.styles';

interface Props {
  name: string;
  label: string;
  options: Array<string>;
}

const FormikInputText: React.FunctionComponent<Props> = ({ label, name, options }) => {
  const { labelStyle, helperText } = useFormikInputSelectStyles();

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);

        return (
          <div>
            <InputLabel className={labelStyle} error={hasError}>
              {label}
            </InputLabel>
            <Autocomplete
              value={field.value}
              onChange={(_event: any, newValue: string) => {
                form.setFieldValue(name, newValue, false);
              }}
              onBlur={form.handleBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  error={hasError}
                  helperText={hasError && meta.error}
                  fullWidth
                  name={field.name}
                  FormHelperTextProps={{ classes: { root: helperText } }}
                />
              )}
              fullWidth
              autoComplete
              options={options}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInputText;
