import Box from '@material-ui/core/Box';
import { useStoreMap } from 'effector-react';
import React from 'react';
import WomanIcon from '../../assets/WomanIcon';
import UserStore from '../../stores/user/UserStore';
import OptionMenu from '../optionMenu/OptionMenu';
import UserLogged from './components/userLogged/UserLogged';
import UserNotLogged from './components/userNotLogged/UserNotLogged';
import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  const token = useStoreMap({
    store: UserStore,
    keys: [],
    fn: (state) => state.token,
  });

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
