import { createStyles, makeStyles } from '@material-ui/core';

const AboutUsInformationStyles = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      display: 'flex',
      flexDirection: 'column',

      alignItems: 'center',
    },
    information: {
      backgroundColor: '#fadce68f',
      width: '75%',
      height: '100%',
      boxShadow: '2px 0px #d53d87',
    },
  })
);

export default AboutUsInformationStyles;
