import Box from '@material-ui/core/Box';
import React from 'react';
import WomanIcon from '../../assets/WomanIcon';
import OptionMenu from '../optionMenu/OptionMenu';
import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.titleContainer}>
        <WomanIcon />
        <h1 className={classes.title}>BH mais segura para elas</h1>
      </div>
      <div>
        <OptionMenu title="Home" toUrl="" />
        <OptionMenu title="Ocorrência" toUrl="occurrences" />
        <OptionMenu title="Ajuda" toUrl="help" />
        <OptionMenu title="Sobre nós" toUrl="aboutus" />
      </div>
    </Box>
  );
};

export default Header;
