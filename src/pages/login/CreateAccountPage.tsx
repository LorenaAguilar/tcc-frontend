import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import FormikInputPassword from '../../components/formikInputPassword/FormikInputPassword';
import FormikInputText from '../../components/formikInputText/formikInputText';
import CreateUserUseCase from '../../usecases/user/CreateUserUseCase';
import CreateAccountPagesStyle from './CreateAccountPage.style';

const CreateAccount: React.FunctionComponent = () => {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const classes = CreateAccountPagesStyle();

  const goHome = useCallback(() => history.push(`/`), [history]);

  const handleClose = () => {
    setOpen(false);
    goHome();
  };

  return (
    <Box>
      <Dialog fullWidth open={open} classes={{ paper: classes.content }}>
        <div className={classes.optionsTitle}>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <DialogTitle className={classes.titleContent}>
          <Typography className={classes.title}> Criar nova conta</Typography>
        </DialogTitle>
        <DialogContent className={classes.fields}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              lastname: '',
              passwordconfirmation: '',
            }}
            validationSchema={yup.object({
              name: yup
                .string()
                .required('Campo obrigatório')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'O campo deve conter somente letras'),
              lastname: yup
                .string()
                .required('Campo obrigatório')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'O campo deve conter somente letras'),
              email: yup
                .string()
                .email('O e-mail deve ser um e-mail válido')
                .required('Campo obrigatório'),
              password: yup
                .string()
                .required('Campo obrigatório')
                .matches(
                  /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                  'A senha deve conter pelo menos 8 caracteres combinando letras, números e símbolos'
                ),
              passwordconfirmation: yup
                .string()
                .required()
                .oneOf([yup.ref('password'), null], 'As senhas não são iguais'),
            })}
            onSubmit={(values) =>
              CreateUserUseCase(
                {
                  email: values.email,
                  password: values.password,
                  name: values.name,
                  lastname: values.lastname,
                },
                handleClose
              )
            }
          >
            {({ handleSubmit, dirty }) => (
              <Form>
                <div className={classes.fieldContent}>
                  <div className={classes.information}>
                    <FormikInputText
                      className={classes.field}
                      label="Nome"
                      placeholder="Nome"
                      name="name"
                    />
                  </div>
                  <div className={classes.information}>
                    <FormikInputText
                      className={classes.field}
                      label="Sobrenome"
                      placeholder="Sobrenome"
                      name="lastname"
                    />
                  </div>
                </div>
                <div className={classes.information}>
                  <FormikInputText
                    className={classes.emailField}
                    label="E-mail"
                    placeholder="Meuemail@exemplo.com"
                    name="email"
                  />
                </div>
                <div className={classes.fieldContent}>
                  <div className={classes.information}>
                    <FormikInputPassword className={classes.field} label="Senha" name="password" />
                  </div>

                  <div className={classes.information}>
                    <FormikInputPassword
                      className={classes.field}
                      label="Confirmar senha"
                      name="passwordconfirmation"
                    />
                  </div>
                </div>

                <div className={classes.containerButton}>
                  <Button
                    className={classes.button}
                    disabled={!dirty}
                    onClick={handleSubmit as () => void}
                  >
                    Criar conta
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CreateAccount;
