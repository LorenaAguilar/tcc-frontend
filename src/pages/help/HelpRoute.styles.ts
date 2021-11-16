import { createStyles, makeStyles } from '@material-ui/core';

const useHelpRouteStyles = makeStyles(() =>
  createStyles({
    container: {
      height: 'calc(100vh - 10vh - 7vh)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
    },
    information: {
      backgroundColor: '#fadce68f',
      width: '75%',
      borderLeft: '2px solid #d53d87',
      borderRight: '2px solid #d53d87',
      padding: 32,
      display: 'grid',
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

export default useHelpRouteStyles;
