import { createStyles, makeStyles } from '@material-ui/core';

const useInfoWindowStyle = makeStyles(() =>
  createStyles({
    centerContent: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
    },
  })
);

export default useInfoWindowStyle;
