import { createStyles, makeStyles } from '@material-ui/core';

const ContainerStyles = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      padding: '0',
      bottom: '0',
      left: '0',
    },
  })
);

export default ContainerStyles;
