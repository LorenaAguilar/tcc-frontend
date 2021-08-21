import { makeStyles, createStyles } from '@material-ui/core';

const OptionMenuStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      color: '#000000',
      fontSize: '20px',
      fontWeight: 'bold',
      marginRight: '20px',
      '&:hover': {
        color: '#E63E89',
        backgroundColor: '#FADCE6',
      },
    },
    selected: {
      boxShadow: '0px 5px #D53D87',
    },
  })
);

export default OptionMenuStyles;
