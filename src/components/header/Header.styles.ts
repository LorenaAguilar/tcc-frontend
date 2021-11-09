import { createStyles, makeStyles } from '@material-ui/core';

const HeaderStyles = makeStyles(() =>
  createStyles({
    container: {
      width: 'auto',
      height: '10vh',
      backgroundColor: '#FADCE6',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '3px',
      boxShadow: '0px 3px #D53D87',
    },
    title: {
      color: '#000000',
      fontSize: '20px',
      paddingTop: '5px',
      width: '50%',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '16px',
    },
    optionsContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '20px',
    },
    loginIcon: {
      fontSize: 40,
    },
    loginButton: {
      minWidth: 40,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    menuOptions: {
      marginTop: '45px',
    },
    root: {
      backgroundColor: '#D53D87',
      fontSize: '23px',
      fontWeight: 500,
      width: '50px',
      height: '50px',
    },
  })
);

export default HeaderStyles;
