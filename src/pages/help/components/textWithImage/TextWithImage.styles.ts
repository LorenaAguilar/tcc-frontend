import { createStyles, makeStyles } from '@material-ui/core';

const useTextWithImageStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    media: {
      backgroundColor: '#fadce68f',
      height: 'auto',
      width: 'auto',
    },
  })
);

export default useTextWithImageStyles;
