import { createStyles, makeStyles } from '@material-ui/core';

const useModalStyles = makeStyles(() =>
  createStyles({
    titleStyle: {
      fontSize: '24px',
      fontWeight: 500,
    },
  })
);

export default useModalStyles;
