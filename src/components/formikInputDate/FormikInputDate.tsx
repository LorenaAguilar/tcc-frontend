import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { Field, FieldProps } from 'formik';
import React from 'react';
import useFormikInputDateTimeStyles from './FormikInputDate.styles';

interface Props {
  label: string;
  name: string;
}

const FormikInputDateTime: React.FunctionComponent<Props> = ({ label, name }) => {
  const { labelStyle, helperText } = useFormikInputDateTimeStyles();

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);

        return (
          <div>
            <InputLabel className={labelStyle} error={hasError}>
              {label}
            </InputLabel>
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
