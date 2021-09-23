import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import useFormikInputTextStyles from './formikInputText.styles';

interface Props {
  name: string;
  label: string;
  required?: boolean;
}

const FormikInputText: React.FunctionComponent<Props> = ({ label, name, required }) => {
  const { helperText } = useFormikInputTextStyles();

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
          <div>
            <InputLabel label={label} required={required} hasError={hasError} />
            <TextField
              helperText={hasError && meta.error}
              fullWidth
              variant="outlined"
              onChange={field.onChange}
              onBlur={onBlur}
              error={hasError}
              value={field.value || ''}
              FormHelperTextProps={{ classes: { root: helperText } }}
              name={field.name}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInputText;
