import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useStoreMap } from 'effector-react';
import React, { useEffect, useState } from 'react';
import UserStore from '../../stores/user/UserStore';
import ListUserOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listUserOccurrencesUseCase';
import Login from '../login/LoginPage';
import CreateOccurrenceModal from './components/createOccurrenceModal/CreateOccurrenceModal';
import OccurrenceList from './components/occurrenceList/OccurrenceList';
import OcurrencesPageStyle from './OcurrencesPage.style';

const OccurrencesPage: React.FunctionComponent = () => {
  const [isCreateOccurrenceModalOpen, setIsCreateOccurrenceModalOpen] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const classes = OcurrencesPageStyle();
  useEffect(() => {
    ListUserOccurrencesUseCase();
  }, []);

  const token = useStoreMap({
    store: UserStore,
    keys: [],
    fn: (state) => state.token,
  });

  const logged = () => (
    <>
      <header className={classes.header}>
        <Typography variant="h2">Ocorrências cadastradas</Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddIcon />}
          onClick={() => setIsCreateOccurrenceModalOpen(true)}
        >
          Criar ocorrência
        </Button>
      </header>
      <div className={classes.content}>
        <OccurrenceList />
      </div>
    </>
  );

  const login = () => (
    <Button onClick={() => setOpenLogin(true)} className={classes.notLoggedButton}>
      login
    </Button>
  );

  const notLogged = () => (
    <div className={classes.notLogged}>
      <Typography variant="h2">
        Atenção! Realize o {login()} para visualizar e cadastrar ocorrências.
      </Typography>
    </div>
  );

  return (
    <main className={classes.container}>
      <CreateOccurrenceModal
        isOpen={isCreateOccurrenceModalOpen}
        onClose={() => setIsCreateOccurrenceModalOpen(false)}
      />
      {token && logged()}
      {!token && notLogged()}

      <Login isOpen={openLogin} setIsOpen={setOpenLogin} />
    </main>
  );
};

export default OccurrencesPage;
