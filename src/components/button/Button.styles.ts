import { makeStyles, createStyles } from '@material-ui/core';

const ButtonStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      color: '#FFB7D7',
      fontSize: '20px',
      fontWeight: 500,
      paddingRight: '20px',

      '&:hover': {
        color: '#E63E89',
        backgroundColor: '#5C1434',
      },
    },
  })
);

export default ButtonStyles;
