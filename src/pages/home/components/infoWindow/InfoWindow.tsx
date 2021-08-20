import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { Box, Typography } from '@material-ui/core';

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  selected: Location;
  setSelected: (location: Location | null) => void;
  locationOcurrence?: string;
  descriptionOcurrence?: string;
  dateOcurrence?: string;
}

const InformationWindow: React.FunctionComponent<Props> = ({
  selected,
  setSelected,
  locationOcurrence,
  descriptionOcurrence,
  dateOcurrence,
}) => (
  <>
    <InfoWindow
      position={{ lat: selected.lat, lng: selected.lng }}
      onCloseClick={() => {
        setSelected(null);
      }}
    >
      <Box>
        {/* Colocar um scroll para a caixinha não ficar tão larga ou tão grande */}
        <Typography>Data: </Typography>
        <Typography>{dateOcurrence}</Typography>
        <Typography>Localização: </Typography>
        <Typography>{locationOcurrence}</Typography>
        <Typography>Descrição: </Typography>
        <Typography>{descriptionOcurrence}</Typography>
      </Box>
    </InfoWindow>
  </>
);

InformationWindow.defaultProps = {
  locationOcurrence: 'Rua Madre de Deus, bairro Ouro Minas ?nº 362',
  descriptionOcurrence:
    'Na noite do dia 13, eu estava andando pela rua, quando vieram dois homens em uma moto e me assaltaram',
  dateOcurrence: '13/02/2021',
};

export default InformationWindow;
