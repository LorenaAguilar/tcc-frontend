import React from 'react';
import Box from '@material-ui/core/Box';

import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  return <Box className={classes.container} />;
};

export default Header;
