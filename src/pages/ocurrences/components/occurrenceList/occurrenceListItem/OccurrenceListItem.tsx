import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RoomIcon from '@material-ui/icons/LocationOnOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useStoreMap } from 'effector-react';
import React, { useMemo, useState } from 'react';
import OriginEnum from '../../../../../domains/OriginEnum';
import HomePageStore from '../../../../../stores/homePage/HomePageStore';
import DeleteOccurrenceModal from '../../deleteOccurrenceModal/DeleteOccurrenceModal';
import EditOccurrenceModal from '../../editOccurrenceModal/EditOccurrenceModal';
import useOccurrenceListItemStyles from './OccurrenceListItem.styles';

interface Props {
  occurrenceId: string;
}

const OccurrenceListItem: React.FunctionComponent<Props> = ({ occurrenceId }) => {
  const { root, contentCard, centerContent, title, formattedText } = useOccurrenceListItemStyles();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const occurrence = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.userOccurrences.find(({ id }) => occurrenceId === id),
  });

  const formattedTime = useMemo(
    () =>
      `${occurrence?.dateTime
        .toLocaleTimeString()
        .substring(0, 5)} ${occurrence?.dateTime?.toLocaleDateString()}`,
    [occurrence]
  );

  const formattedOrigin = useMemo(() => {
    switch (occurrence?.origin) {
      case OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO:
        return 'Coletei do noticiário';
      case OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO:
        return 'Fui vítima';
      case OriginEnum.TESTEMUNHEI_UMA_SITUACAO:
        return 'Testemunhei';
      default:
        return 'Origem desconhecida';
    }
  }, [occurrence]);

  if (!occurrence) {
    return null;
  }

  return (
    <Card className={root}>
      <CardHeader
        action={
          <>
            <IconButton onClick={() => setIsDeleteModalOpen(true)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setIsEditModalOpen(true)}>
              <EditIcon />
            </IconButton>
          </>
        }
        title={
          <div className={`${centerContent} ${title}`}>
            <RoomIcon />
            <Typography variant="h4" className={formattedText} color="textPrimary">
              {occurrence.location.address}
            </Typography>
          </div>
        }
        subheader={
          <div className={centerContent}>
            <ScheduleIcon />
            <Typography>{formattedTime}</Typography>
          </div>
        }
      />
      <CardContent className={contentCard}>
        <Typography component="p">
          <b>Tipo: </b>
          {occurrence.type}
        </Typography>
        <Typography component="p">
          <b>Origem: </b>
          {formattedOrigin}
        </Typography>
        <Typography component="p">
          <b>Descrição da ocorrência: </b>
          {occurrence.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing />
      <DeleteOccurrenceModal
        isOpen={isDeleteModalOpen}
        occurrenceId={occurrence.id}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <EditOccurrenceModal
        isOpen={isEditModalOpen}
        occurrenceId={occurrence.id}
        onClose={() => setIsEditModalOpen(false)}
      />
    </Card>
  );
};

export default OccurrenceListItem;
