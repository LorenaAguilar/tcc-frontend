import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import WomanIcon from '../../assets/WomanIcon';
import Login from '../../pages/login/LoginPage';
import OptionMenu from '../optionMenu/OptionMenu';
import HeaderStyles from './Header.styles';

const Header: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [openLogin, setOpenLogin] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickButton = useCallback((toUrl) => history.push(`/${toUrl}`), [history]);

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
        <div>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircleIcon className={classes.loginIcon} />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            className={classes.menuOptions}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setOpenLogin(true);
                handleClose();
              }}
            >
              Entrar
            </MenuItem>
            <MenuItem
              onClick={() => {
                onClickButton('cadastroConta');
                handleClose();
              }}
            >
              Criar conta
            </MenuItem>
          </Menu>

          <Login isOpen={openLogin} setIsOpen={setOpenLogin} />
        </div>
      </div>
    </Box>
  );
};

export default Header;
