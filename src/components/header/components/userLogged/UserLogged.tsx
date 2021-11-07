import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { useCallback } from 'react';
import HeaderStyles from '../../Header.styles';
import StringAvatar from './StringToAvatar';

const UserLogged: React.FunctionComponent = () => {
  const classes = HeaderStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickButton = useCallback(() => {
    localStorage.removeItem('token');
    window.location.reload();
  }, []);

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <Avatar {...StringAvatar('Gustavo', 'Sena')} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        className={classes.menuOptions}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickButton}>Sair</MenuItem>
      </Menu>
    </div>
  );
};

export default UserLogged;
