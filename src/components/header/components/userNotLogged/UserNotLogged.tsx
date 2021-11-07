import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../../../../pages/login/LoginPage';
import HeaderStyles from '../../Header.styles';

const UserNotLogged: React.FunctionComponent = () => {
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
  );
};

export default UserNotLogged;
