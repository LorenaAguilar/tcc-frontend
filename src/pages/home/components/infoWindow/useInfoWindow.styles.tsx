import { createStyles, makeStyles } from '@material-ui/core';

const useInfoWindowStyle = makeStyles(() =>
  createStyles({
    centerContent: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
    },
    container: {
      display: 'grid',
      gap: 8,
    },
    formattedText: {
      maxWidth: 585,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

export default useInfoWindowStyle;
