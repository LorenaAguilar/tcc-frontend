import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';
import React from 'react';
import useFormikInputTextStyles from './formikInputText.styles';

interface Props {
  name: string;
  label: string;
}

const FormikInputText: React.FunctionComponent<Props> = ({ label, name }) => {
  const { labelStyle } = useFormikInputTextStyles();

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);

        const onBlur = (event) => {
          const value = event.target.value.trim();

          form.setValues({
            ...form.values,
            [field.name]: value,
          });
          form.setFieldTouched(field.name, true, true);
        };

        return (
          <>
            <InputLabel className={labelStyle} error={hasError}>
              {label}
            </InputLabel>
            <TextField
              helperText={meta.error}
              required
              fullWidth
              variant="outlined"
              onChange={field.onChange}
              onBlur={onBlur}
              error={hasError}
              value={field.value || ''}
              name={field.name}
            />
          </>
        );
      }}
    </Field>
  );
};

export default FormikInputText;
