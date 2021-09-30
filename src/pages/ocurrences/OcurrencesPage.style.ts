import { createStyles, makeStyles } from '@material-ui/core';

const OcurrencesPageStyle = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      display: 'flex',
      flexDirection: 'column',
      margin: 32,
      alignItems: 'center',
    },
    content: {
      height: '100%',
    },
    button: {},
    header: {
      paddingBottom: 16,
      paddingRight: '25%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);

export default OcurrencesPageStyle;
