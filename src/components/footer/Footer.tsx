import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FooterStyles from './Footer.styles';

const Footer: React.FunctionComponent = () => {
  const classes = FooterStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h4">
          Copyright © 2021 BH mais segura para elas. Todos os direitos reservados.
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
