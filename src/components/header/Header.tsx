import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '../button/Button';
import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>BH mais segura para elas</h1>
      </div>
      <div>
        <Button title="Home" />
        <Button title="Ocorrência" />
        <Button title="Ajuda" />
        <Button title="Sobre nós" />
      </div>
    </Box>
  );
};

export default Header;
