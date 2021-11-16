import Box from '@material-ui/core/Box';
import React from 'react';
import CreateOccurrenceButtonImage from '../../assets/help-page/createOccurrenceButton.png';
import LoginImage from '../../assets/help-page/login.jpeg';
import occurrenceDetailsImage from '../../assets/help-page/occurrenceDetails.jpg';
import ListOccurrencesImage from '../../assets/help-page/occurrenceList.png';
import OccurrenceAndRiskZoneImage from '../../assets/help-page/ocorrencias-and-risk-zone.png';
import TextWithImage from './components/textWithImage/TextWithImage';
import useHelpRouteStyles from './HelpRoute.styles';

const HelpRoute: React.FunctionComponent = () => {
  const classes = useHelpRouteStyles();

  return (
    <main className={classes.container}>
      <Box className={classes.information}>
        <TextWithImage
          title="Criação de usuário e Login"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={LoginImage}
        />
        <TextWithImage
          title="Mapa"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={OccurrenceAndRiskZoneImage}
        />
        <TextWithImage
          title="Detalhes de uma ocorrência"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={occurrenceDetailsImage}
        />
        <TextWithImage
          title="Criação de uma ocorrência"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={CreateOccurrenceButtonImage}
        />
        <TextWithImage
          title="Listagem de ocorrências"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={ListOccurrencesImage}
        />
      </Box>
    </main>
  );
};

export default HelpRoute;
