import { makeStyles, createStyles } from '@material-ui/core';

const HeaderStyles = makeStyles(() =>
  createStyles({
    container: {
      width: 'auto',
      height: '10vh',
      backgroundColor: '#641D3D',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      color: '#FFB7D7',
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
