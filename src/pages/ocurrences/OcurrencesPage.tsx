import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import listOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listOccurrencesUseCase';
import CreateOccurrenceModal from './components/createOccurrenceModal/CreateOccurrenceModal';
import OccurrenceList from './components/occurrenceList/OccurrenceList';
import OcurrencesPageStyle from './OcurrencesPage.style';

const OccurrencesPage: React.FunctionComponent = () => {
  const [isCreateOccurrenceModalOpen, setIsCreateOccurrenceModalOpen] = useState<boolean>(false);
  const classes = OcurrencesPageStyle();
  useEffect(() => {
    listOccurrencesUseCase();
  }, []);

  return (
    <main className={classes.container}>
      <CreateOccurrenceModal
        isOpen={isCreateOccurrenceModalOpen}
        onClose={() => setIsCreateOccurrenceModalOpen(false)}
      />
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
    </main>
  );
};

export default OccurrencesPage;
