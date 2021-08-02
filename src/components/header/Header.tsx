import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  return (
    <Box className={classes.container}>
      <Button>teste</Button>
    </Box>
  );
};

export default Header;
