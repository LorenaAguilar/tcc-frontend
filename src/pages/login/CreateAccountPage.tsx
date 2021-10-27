import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import React from 'react';

interface Props {
  isOpen: boolean;

  // onClose: () => void;
}

const Login: React.FunctionComponent<Props> = ({ isOpen }) => {
  const teste = 'teste';
  return (
    <Dialog fullWidth open={isOpen}>
      <DialogTitle>
        <Typography> Teste</Typography>
      </DialogTitle>
      <DialogContent>Teste 3</DialogContent>
    </Dialog>
  );
};

export default Login;
