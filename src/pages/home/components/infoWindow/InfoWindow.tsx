import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/LocationOnOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { InfoWindow } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import Occurrence from '../../../../domains/Occurrence';
import OriginEnum from '../../../../domains/OriginEnum';
import useInfoWindowStyle from './useInfoWindow.styles';

interface Props {
  occurreceSelected: Occurrence;
  setOccurrenceSelected: (location: Occurrence | null) => void;
}

const InformationWindow: React.FunctionComponent<Props> = ({
  occurreceSelected: occurrenceSelected,
  setOccurrenceSelected: setSelected,
}) => {
  const { centerContent } = useInfoWindowStyle();
  const formattedTime = useMemo(
    () =>
      `${occurrenceSelected?.dateTime
        .toLocaleTimeString()
        .substring(0, 5)} ${occurrenceSelected?.dateTime?.toLocaleDateString()}`,
    [occurrenceSelected]
  );

  const formattedTitle = useMemo(() => {
    //  const types = ['Baixa Iluminação', 'Iluminação Inexistente', 'Assédio Sexual', 'Morte', 'Assalto'];
    console.log(occurrenceSelected.type, occurrenceSelected.origin);
    if (occurrenceSelected.type.toLowerCase() === 'baixa iluminação') {
      switch (occurrenceSelected?.origin) {
        case OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO:
          return 'No noticiário, alguém viu que aqui não possui iluminação';
        case OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO:
          return 'Alguém viu que aqui não possui iluminação';
        case OriginEnum.TESTEMUNHEI_UMA_SITUACAO:
          return 'Alguém viu que aqui não possui iluminação';
        default:
          return `${occurrenceSelected.type} (informações inconsistentes)`;
      }
    }

    if (occurrenceSelected.type.toLowerCase() === 'iluminação inexistente') {
      switch (occurrenceSelected?.origin) {
        case OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO:
          return 'No noticiário, alguém viu que aqui possui baixa iluminação';
        case OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO:
          return 'Alguém viu que aqui possui baixa iluminação';
        case OriginEnum.TESTEMUNHEI_UMA_SITUACAO:
          return 'Alguém viu que aqui possui baixa iluminação';
        default:
          return `${occurrenceSelected.type} (informações inconsistentes)`;
      }
    }

    if (occurrenceSelected.type.toLowerCase() === 'morte') {
      switch (occurrenceSelected?.origin) {
        case OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO:
          return `No noticiário, alguém viu uma ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        case OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO:
          return `Fui vítima de uma ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        case OriginEnum.TESTEMUNHEI_UMA_SITUACAO:
          return `Testemunhei uma ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        default:
          return `${occurrenceSelected.type} (informações inconsistentes)`;
      }
    }

    if (
      occurrenceSelected.type.toLowerCase() === 'assédio sexual' ||
      occurrenceSelected.type.toLowerCase() === 'assalto'
    ) {
      switch (occurrenceSelected?.origin) {
        case OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO:
          return `No noticiário, alguém viu um ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        case OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO:
          return `Fui vítima de um ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        case OriginEnum.TESTEMUNHEI_UMA_SITUACAO:
          return `Testemunhei um ${occurrenceSelected.type.toLocaleLowerCase()} aqui`;
        default:
          return `${occurrenceSelected.type} (informações inconsistentes)`;
      }
    }

    return 'Algo aconteceu aqui (informações inconsistentes)';
  }, [occurrenceSelected.type, occurrenceSelected.origin]);

  return (
    <>
      <InfoWindow
        position={{ lat: occurrenceSelected.location.lat, lng: occurrenceSelected.location.lng }}
        onCloseClick={() => {
          setSelected(null);
        }}
      >
        <Box>
          <Typography color="textPrimary" variant="h4">
            {formattedTitle}
          </Typography>
          <div className={centerContent}>
            <RoomIcon />
            <Typography component="p" color="textPrimary">
              {occurrenceSelected.location.address}
            </Typography>
          </div>
          <div className={centerContent}>
            <ScheduleIcon />
            <Typography component="p" color="textPrimary">
              {formattedTime}
            </Typography>
          </div>
          <Typography component="p">{occurrenceSelected.description}</Typography>
        </Box>
      </InfoWindow>
    </>
  );
};

export default InformationWindow;
