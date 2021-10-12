import { createStyles, makeStyles } from '@material-ui/core';

const useCreateOccurrenceModalStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      gap: '16px',
    },
  })
);

export default useCreateOccurrenceModalStyles;
