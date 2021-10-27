import { createStyles, makeStyles } from '@material-ui/core';

const LoginPagesStyle = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      display: 'flex',
      flexDirection: 'column',
      margin: 32,
      alignItems: 'center',
    },
    content: {
      height: '500px',
      display: 'flex',
      alignItems: 'center',
    },
    login: {
      width: '50%',
      height: '50%',
      background: '#fadce6a8',
      border: 'solid  #d53d87',
      borderRadius: 5,
    },
    fields: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    },
    field: {
      width: '350px',
      margin: '3px 0px 12px',
    },
    information: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flexStart',
      marginTop: '8px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 500,
    },
    titleContent: {
      fontSize: '24px',
      boxShadow: '0px 1px #D53D87',
      width: '450px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '5px',
      paddingTop: '0px',
    },
    optionsTitle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'end',
      height: '28px',
      marginTop: '3px',
    },
    button: {
      width: '350px',
      backgroundColor: '#D53D87',
    },
  })
);

export default LoginPagesStyle;
