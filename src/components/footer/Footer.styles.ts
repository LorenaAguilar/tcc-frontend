import { makeStyles, createStyles } from '@material-ui/core';

const FooterStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: '7vh',
      backgroundColor: '#FADCE6',
      position: 'fixed',
      bottom: '0',
      left: '0',
      boxShadow: 'inset 0px 3px #d53d87',
    },
    text: {
      color: '#000000',
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingRight: '16px',
      justifyContent: 'flex-end',
    },
  })
);

export default FooterStyles;
