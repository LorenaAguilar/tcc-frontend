import { createStyles, makeStyles } from '@material-ui/core';

const useFormikInputDateTimeStyles = makeStyles(() =>
  createStyles({
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useFormikInputDateTimeStyles;
