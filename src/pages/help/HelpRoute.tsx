import Box from '@material-ui/core/Box';
import React from 'react';
import LoginImage from '../../assets/help-page/login.png';
import OccurrenceAndRiskZoneImage from '../../assets/help-page/ocorrencias-and-risk-zone.png';
import WomanIcon from '../../assets/WomanIcon';
import TextWithImage from './components/textWithImage/TextWithImage';
import useHelpRouteStyles from './HelpRoute.styles';

const HelpRoute: React.FunctionComponent = () => {
  const classes = useHelpRouteStyles();

  return (
    <main className={classes.container}>
      <Box className={classes.information}>
        <TextWithImage
          title="Login"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={LoginImage}
        />
        <TextWithImage
          title="Login"
          text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          imagePath={OccurrenceAndRiskZoneImage}
        />
        <div className={classes.icon}>
          <WomanIcon />
        </div>
      </Box>
    </main>
  );
};

export default HelpRoute;
