import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import LoginPagesStyle from './LoginPage.style';

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const Login: React.FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
  const classes = LoginPagesStyle();
  const [open, setOpen] = React.useState(isOpen);

  interface State {
    password: string;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Dialog fullWidth open={isOpen} classes={{ paper: classes.content }}>
        <div className={classes.optionsTitle}>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <DialogTitle className={classes.titleContent}>
          <Typography className={classes.title}> Fazer login</Typography>
        </DialogTitle>
        <DialogContent className={classes.fields}>
          <div className={classes.information}>
            <Typography> E-mail</Typography>

            <TextField
              className={classes.field}
              placeholder="Meuemail@exemplo.com"
              variant="outlined"
            />
          </div>

          <div className={classes.information}>
            <Typography> Senha</Typography>
            <OutlinedInput
              className={classes.field}
              placeholder="Senha"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>

          <Button className={classes.button}>Entrar</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Login;
