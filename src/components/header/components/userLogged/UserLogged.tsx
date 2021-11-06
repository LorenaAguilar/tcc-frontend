import { Avatar } from '@material-ui/core';
import ButtonComponent from '@material-ui/core/Button';
import React from 'react';

interface Props {
  title: string;
}

const Button: React.FunctionComponent<Props> = () => (
  <ButtonComponent>

    <IconButton color="inherit" onClick={handleClick}>
    <Avatar>OP</Avatar>
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
  </ButtonComponent>
);

export default Button;
