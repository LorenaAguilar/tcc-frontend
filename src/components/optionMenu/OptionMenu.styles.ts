import { makeStyles, createStyles } from '@material-ui/core';

const OptionMenuStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      color: '#FFB7D7',
      fontSize: '20px',
      fontWeight: 500,
      marginRight: '20px',
      '&:hover': {
        color: '#E63E89',
        backgroundColor: '#5C1434',
      },
    },
    selected: {
      borderBottom: '3px solid',
    },
  })
);

export default OptionMenuStyles;
