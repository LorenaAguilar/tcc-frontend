import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import { Field, FieldProps } from 'formik';
import React from 'react';

interface Props {
  label: string;
  name: string;
  type: 'date' | 'time';
}

const FormikInputDateTime: React.FunctionComponent<Props> = ({ label, name, type }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const hasError = Boolean(meta.touched && meta.error);

        return (
          <div>
            <InputLabel className="labelStyle" error={hasError}>
              {label}
            </InputLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {type === 'date' && (
                <KeyboardDatePicker
                  format="dd/MM/yyyy"
                  value={field.value}
                  onChange={form.handleChange}
                />
              )}
              {type === 'time' && (
                <KeyboardTimePicker value={field.value} onChange={form.handleChange} />
              )}
            </MuiPickersUtilsProvider>
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInputDateTime;
