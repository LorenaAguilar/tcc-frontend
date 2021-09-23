import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { Field, FieldProps } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import useFormikInputDateTimeStyles from './FormikInputTime.styles';

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

const FormikInputDateTime: React.FunctionComponent<Props> = ({ label, name, required }) => {
  const { helperText } = useFormikInputDateTimeStyles();

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);

        return (
          <div>
            <InputLabel label={label} required={required} hasError={hasError} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                clearable
                value={field.value}
                onChange={(value) => form.setFieldValue(field.name, value, false)}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
                inputVariant="outlined"
                onBlur={field.onBlur}
                name={field.name}
                error={hasError}
                fullWidth
                FormHelperTextProps={{ classes: { root: helperText } }}
                ampm={false}
                helperText={hasError && meta.error}
              />
            </MuiPickersUtilsProvider>
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInputDateTime;
