import { Box, Typography } from '@material-ui/core';
import { InfoWindow } from '@react-google-maps/api';
import React from 'react';
import Occurrence from '../../../../domains/Occurrence';

interface Props {
  occurreceSelected: Occurrence;
  setOccurrenceSelected: (location: Occurrence | null) => void;
}

const InformationWindow: React.FunctionComponent<Props> = ({
  occurreceSelected,
  setOccurrenceSelected: setSelected,
}) => (
  <>
    <InfoWindow
      position={{ lat: occurreceSelected.location.lat, lng: occurreceSelected.location.lng }}
      onCloseClick={() => {
        setSelected(null);
      }}
    >
      <Box>
        {/* Colocar um scroll para a caixinha não ficar tão larga ou tão grande */}
        <Typography>Data: </Typography>
        <Typography>{occurreceSelected.dateTime.toDateString()}</Typography>
        <Typography>Localização: </Typography>
        <Typography>{occurreceSelected.location.address}</Typography>
        <Typography>Descrição: </Typography>
        <Typography>{occurreceSelected.description}</Typography>
      </Box>
    </InfoWindow>
  </>
);

export default InformationWindow;
