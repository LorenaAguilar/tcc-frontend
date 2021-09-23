import { createStyles, makeStyles } from '@material-ui/core';

const useFormikInputTextStyles = makeStyles(() =>
  createStyles({
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useFormikInputTextStyles;
