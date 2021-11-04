import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import FormikInputPassword from '../../components/formikInputPassword/FormikInputPassword';
import FormikInputText from '../../components/formikInputText/formikInputText';
import LoginPagesStyle from './LoginPage.style';

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const Login: React.FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
  const classes = LoginPagesStyle();

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
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={object({
              email: string()
                .email('Você deve inserir um email válido!')
                .required('Campo obrigatório'),
              password: string().required('Campo obrigatório'),
            })}
            onSubmit={(a) => console.log(a)}
          >
            {({ handleSubmit, dirty }) => (
              <Form>
                <div className={classes.information}>
                  <FormikInputText
                    className={classes.field}
                    label="E-mail"
                    placeholder="Meuemail@exemplo.com"
                    name="email"
                  />
                </div>

                <div className={classes.information}>
                  <FormikInputPassword className={classes.field} label="Senha" name="password" />
                </div>

                <Button
                  className={classes.button}
                  disabled={!dirty}
                  onClick={handleSubmit as () => void}
                >
                  Entrar
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Login;
