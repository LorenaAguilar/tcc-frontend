import { makeStyles, createStyles } from '@material-ui/core';

const FooterStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: '7vh',
      backgroundColor: '#751942',

      position: 'fixed',
      bottom: '0',
      left: '0',
    },
  })
);

export default FooterStyles;
