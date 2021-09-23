import { createStyles, makeStyles } from '@material-ui/core';

const useAutoCompletePlacesStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginRight: 8,
    },
    labelStyle: {
      marginBottom: 8,
    },
  })
);

export default useAutoCompletePlacesStyles;
