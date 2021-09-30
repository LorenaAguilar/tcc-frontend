import { createStyles, makeStyles } from '@material-ui/core';

const OcurrenceListItemStyle = makeStyles(() =>
  createStyles({
    root: {
      maxHeight: 500,
      width: 750,
      marginBottom: 24,
    },
    test: {
      marginBottom: 5,
    },
    contentCard: {
      paddingTop: 0,
    },
  })
);

export default OcurrenceListItemStyle;
