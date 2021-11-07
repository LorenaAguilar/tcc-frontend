import Box from '@material-ui/core/Box';
import React from 'react';
import WomanIcon from '../../assets/WomanIcon';
import useLocalStorage from '../../hooks/useLocalStorage';
import OptionMenu from '../optionMenu/OptionMenu';
import UserLogged from './components/userLogged/UserLogged';
import UserNotLogged from './components/userNotLogged/UserNotLogged';
import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  const [token] = useLocalStorage('token', '');

  return (
    <Box className={classes.container}>
      <div className={classes.titleContainer}>
        <WomanIcon />
        <h1 className={classes.title}>BH mais segura para elas</h1>
      </div>
      <div className={classes.optionsContainer}>
        <OptionMenu title="Home" toUrl="" />
        <OptionMenu title="Ocorrência" toUrl="occurrences" />
        <OptionMenu title="Sobre nós" toUrl="aboutus" />
        {token && <UserLogged />}
        {!token && <UserNotLogged />}
      </div>
    </Box>
  );
};

export default Header;
