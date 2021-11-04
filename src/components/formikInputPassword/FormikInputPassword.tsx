import { FormHelperText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Field, FieldProps } from 'formik';
import React, { useState } from 'react';
import InputLabel from '../inputLabel/InputLabel';
import useFormikInputPasswordStyles from './FormikInputPassword.styles';

interface Props {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormikInputPassword: React.FunctionComponent<Props> = ({
  label,
  name,
  required,
  placeholder,
  className,
}) => {
  const { helperText } = useFormikInputPasswordStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
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

            <OutlinedInput
              className={className}
              name={field.name}
              placeholder={placeholder}
              type={showPassword ? 'text' : 'password'}
              value={field.value || ''}
              fullWidth
              onChange={field.onChange}
              onBlur={onBlur}
              error={hasError}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={hasError} className={helperText}>
              {hasError && meta.error}
            </FormHelperText>
          </div>
        );
      }}
    </Field>
  );
};

export default FormikInputPassword;
