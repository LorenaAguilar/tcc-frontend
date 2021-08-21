import { makeStyles, createStyles } from '@material-ui/core';

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
  })
);

export default HeaderStyles;
