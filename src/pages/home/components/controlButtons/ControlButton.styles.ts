import { createStyles, makeStyles } from '@material-ui/core';

const ControlButtonsUseStyles = makeStyles(() =>
  createStyles({
    container: {
      position: 'absolute',
      marginTop: '10px',
    },

    containerButton: {
      display: 'flex',
      justifyContent: 'center',
    },

    buttonControl: {
      backgroundColor: '#FADCE6',
      color: '#000000',
      height: '40px',
      borderRadius: '2px',
      border: 'none',
      boxShadow: '0px 2px 2px #db5998',
      textTransform: 'none',

      '&&:hover': {
        backgroundColor: '#db5998',
      },
    },
  })
);

export default ControlButtonsUseStyles;
