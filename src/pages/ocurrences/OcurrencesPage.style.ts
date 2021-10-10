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
      '&>h2': { textDecoration: 'underline' },
      paddingBottom: 16,
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'calc((100% - 362.63px) / 2 - 228.66px)',
      alignContent: 'center',
      justifyContent: 'flex-end',
    },
  })
);

export default OcurrencesPageStyle;
