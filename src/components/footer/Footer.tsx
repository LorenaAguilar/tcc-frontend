import React from 'react';
import Box from '@material-ui/core/Box';
import FooterStyles from './Footer.styles';

const Footer: React.FunctionComponent = () => {
  const classes = FooterStyles();
  return <Box className={classes.container} />;
};

export default Footer;
