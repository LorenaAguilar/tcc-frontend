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
import React, { useMemo } from 'react';
import HomePageStore from '../../../../../stores/homePage/HomePageStore';
import useOccurrenceListItemStyles from './OccurrenceListItem.styles';

interface Props {
  occurrenceId: string;
}

const OccurrenceListItem: React.FunctionComponent<Props> = ({ occurrenceId }) => {
  const { root, test } = useOccurrenceListItemStyles();
  const occurrence = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.occurrences.find(({ id }) => occurrenceId === id),
  });

  const formattedTime = useMemo(
    () =>
      `${occurrence?.dateTime?.getHours()}:${occurrence?.dateTime?.getMinutes()} ${occurrence?.dateTime?.toLocaleDateString()}`,
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
            <IconButton>
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
      <CardContent>
        <Chip variant="outlined" label={occurrence.type} className={test} />

        <Typography variant="body2" component="p">
          <b> Descrição da ocorrência: </b>
          {occurrence.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing />
    </Card>
  );
};

export default OccurrenceListItem;
