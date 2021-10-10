import { createStyles, makeStyles } from '@material-ui/core';

const OcurrenceListItemStyle = makeStyles(() =>
  createStyles({
    root: {
      maxHeight: 500,
      width: 750,
      marginBottom: 24,
    },
    title: {
      marginBottom: 4,
    },
    contentCard: {
      paddingTop: 0,
    },
    centerContent: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
    },
  })
);

export default OcurrenceListItemStyle;
