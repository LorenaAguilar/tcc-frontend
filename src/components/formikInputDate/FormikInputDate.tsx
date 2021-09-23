import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { Field, FieldProps } from 'formik';
import React from 'react';
import InputLabel from '../inputLabel/InputLabel';
import useFormikInputDateTimeStyles from './FormikInputDate.styles';

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
              <KeyboardDatePicker
                format="dd/MM/yyyy"
                mask="__/__/____"
                value={field.value}
                clearable
                name={field.name}
                onChange={(value) => form.setFieldValue(field.name, value)}
                onBlur={field.onBlur}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                inputVariant="outlined"
                fullWidth
                FormHelperTextProps={{ classes: { root: helperText } }}
                error={hasError}
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
