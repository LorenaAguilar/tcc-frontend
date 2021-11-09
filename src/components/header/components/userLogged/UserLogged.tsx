import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import { useStoreMap } from 'effector-react';
import React, { useCallback } from 'react';
import UserStore from '../../../../stores/user/UserStore';
import LogoutUseCase from '../../../../usecases/user/LogoutUseCase';
import HeaderStyles from '../../Header.styles';
import StringAvatar from './StringToAvatar';

const UserLogged: React.FunctionComponent = () => {
  const classes = HeaderStyles();
  const { name, lastname } = useStoreMap({
    store: UserStore,
    keys: [],
    fn: (state) => ({ name: state.name, lastname: state.lastname }),
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickButton = useCallback(() => {
    LogoutUseCase();
  }, []);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar {...StringAvatar(name, lastname)} classes={{ root: classes.root }} />
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
