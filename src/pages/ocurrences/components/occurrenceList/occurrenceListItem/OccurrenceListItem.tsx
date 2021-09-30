import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useStoreMap } from 'effector-react';
import React, { useMemo, useState } from 'react';
import HomePageStore from '../../../../../stores/homePage/HomePageStore';
import DeleteOccurrenceModal from '../../deleteOccurrenceModal/DeleteOccurrenceModal';
import useOccurrenceListItemStyles from './OccurrenceListItem.styles';

interface Props {
  occurrenceId: string;
}

const OccurrenceListItem: React.FunctionComponent<Props> = ({ occurrenceId }) => {
  const { root, test, contentCard } = useOccurrenceListItemStyles();
  const [isOpen, setIsOpen] = useState(false);
  const occurrence = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.occurrences.find(({ id }) => occurrenceId === id),
  });

  const formattedTime = useMemo(
    () =>
      `${occurrence?.dateTime
        .toLocaleTimeString()
        .substring(0, 5)} ${occurrence?.dateTime?.toLocaleDateString()}`,
    [occurrence]
  );

  if (!occurrence) {
    return null;
  }

  return (
    <Card className={root}>
      <CardHeader
        action={
          <>
            <IconButton onClick={() => setIsOpen(true)}>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
          </>
        }
        title={occurrence.location.address}
        subheader={formattedTime}
      />
      <CardContent className={contentCard}>
        <Chip variant="outlined" label={occurrence.type} className={test} />

        <Typography variant="body2" component="p">
          <b> Descrição da ocorrência: </b>
          {occurrence.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing />
      <DeleteOccurrenceModal
        isOpen={isOpen}
        occurrenceId={occurrence.id}
        onClose={() => setIsOpen(false)}
      />
    </Card>
  );
};

export default OccurrenceListItem;
