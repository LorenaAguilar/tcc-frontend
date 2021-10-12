import Box from '@material-ui/core/Box';
import React from 'react';
import WomanIcon from '../../../../assets/WomanIcon';
import InfoSection from '../infoSection/InfoSection';
import AboutUsInformationStyles from './AboutUsInformation.styles';

const AboutUsInformation: React.FunctionComponent = () => {
  const classes = AboutUsInformationStyles();

  return (
    <main className={classes.container}>
      <Box className={classes.information}>
        <InfoSection
          title="Sobre"
          text="A aplicação Mulheres seguras em BH é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
        />
        <div className={classes.icon}>
          <WomanIcon />
        </div>
        <InfoSection
          title="Quem Somos"
          text="Este projeto surgiu como iniciativa de dois estudantes de graduação do curso de Sistemas de Informação da PUC-Minas e foi desenvolvido como trabalho de conclusão de curso."
          texts={[
            'A aplicação foi desenvolvida com o objetivo de ser uma plataforma digital colaborativa e informativa, em que se pode cadastrar informações como iluminação baixa ou inexistente e casos de assédio, assaltos e mortes nas ruas de Belo Horizonte. Essas informações são coletadas e expostas no mapa da página principal da aplicação, para que seja de conhecimento de todos aqueles que acessarem a aplicação.',
          ]}
        />
        <div className={classes.icon}>
          <WomanIcon />
        </div>
        <InfoSection
          title="Como funciona?"
          text="A coleta de dados da aplicação é feita por meio do cadastro de ocorrências pelos usuários da aplicação. Após esse cadastro, as informações da ocorrência são tratadas, para que nenhum dado pessoal de quem cadastrou seja identificado, e expostas na página principal da aplicação."
        />
      </Box>
    </main>
  );
};

export default AboutUsInformation;
