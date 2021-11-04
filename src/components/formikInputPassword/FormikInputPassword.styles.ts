import { createStyles, makeStyles } from '@material-ui/core';

const useFormikInputPasswordStyles = makeStyles(() =>
  createStyles({
    helperText: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);

export default useFormikInputPasswordStyles;
