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
    formattedText: {
      marginTop: 4,
      maxWidth: 585,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
