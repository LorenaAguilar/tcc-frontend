import { createStyles, makeStyles } from '@material-ui/core';

const useFormikInputTextStyles = makeStyles(() =>
  createStyles({
    labelStyle: {
      marginBottom: '8px',
    },
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useFormikInputTextStyles;
