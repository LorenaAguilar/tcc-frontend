import { createStyles, makeStyles } from '@material-ui/core';

const OcurrencesPageStyle = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      padding: '0',
      bottom: '0',
      left: '0',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      height: '100%',
    },
    button: {
      width: '572px',
    },
    header: {
      height: '10vh',
    },
    footer: {
      bottom: '0',
      width: '100%',
      height: '7vh',
    },
  })
);

export default OcurrencesPageStyle;
