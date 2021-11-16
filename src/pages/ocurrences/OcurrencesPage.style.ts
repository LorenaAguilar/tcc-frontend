import { createStyles, makeStyles } from '@material-ui/core';

const OcurrencesPageStyle = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      display: 'flex',
      flexDirection: 'column',
      padding: 32,
      alignItems: 'center',
      overflowY: 'auto',
    },
    content: {
      height: '100%',
    },
    button: {},
    header: {
      '&>h2': { textDecoration: 'underline' },
      paddingBottom: 16,
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'calc((100% - 362.63px) / 2 - 228.66px)',
      alignContent: 'center',
      justifyContent: 'flex-end',
    },
    notLogged: {
      display: 'flex',
      height: '80%',
      alignItems: 'center',
    },
    notLoggedButton: {
      color: '#d53d87',
      fontSize: '29px',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      lineHeight: 1.2,
      padding: '0px',
      paddingTop: '2px',
      borderBottom: 'solid',
      borderRadius: 0,
    },
  })
);

export default OcurrencesPageStyle;
