import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import CreateOccurrenceModal from './components/createOccurrenceModal/CreateOccurrenceModal';
import OcurrencesPageStyle from './OcurrencesPage.style';

const OccurrencesPage: React.FunctionComponent = () => {
  const [isCreateOccurrenceModalOpen, setIsCreateOccurrenceModalOpen] = useState<boolean>(false);
  const classes = OcurrencesPageStyle();
  return (
    <main className={classes.container}>
      <CreateOccurrenceModal
        isOpen={isCreateOccurrenceModalOpen}
        onClose={() => setIsCreateOccurrenceModalOpen(false)}
      />

      <header className={classes.header}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddIcon />}
          onClick={() => setIsCreateOccurrenceModalOpen(true)}
        />
      </header>
      <div className={classes.content}>Conteúdo</div>
      <nav className={classes.footer}>
        <Pagination count={10} color="secondary" />
      </nav>
    </main>
  );
};

export default OccurrencesPage;
