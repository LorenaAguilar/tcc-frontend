import { createStyles, makeStyles } from '@material-ui/core';

const useAutoCompletePlacesStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginRight: 8,
    },
    labelStyle: {
      marginBottom: 8,
    },
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useAutoCompletePlacesStyles;
