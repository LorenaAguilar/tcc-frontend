import Box from '@material-ui/core/Box';
import { shallow } from 'enzyme';
import React from 'react';
import WomanIcon from '../../../../assets/WomanIcon';
import InfoSection from '../infoSection/InfoSection';
import AboutUsInformation from './AboutUsInformation';
import useAboutUsInformationStyles from './AboutUsInformation.styles';

jest.mock('./AboutUsInformation.styles');
mockUseStyles(useAboutUsInformationStyles, ['container', 'information', 'icon']);

describe('AboutUsInformation', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AboutUsInformation />);

    const expectedWrapper = (
      <main className="container">
        <Box className="information">
          <InfoSection
            title="Sobre"
            text="A aplicação BH mais segura para elas é uma plataforma digital colaborativa que registra locais com baixa iluminação, casos de assédio, assaltos e mortes na cidade de Belo Horizonte."
          />
          <div className="icon">
            <WomanIcon />
          </div>
          <InfoSection
            title="Quem Somos"
            text="Este projeto surgiu como iniciativa de dois estudantes de graduação do curso de Sistemas de Informação da PUC-Minas e foi desenvolvido como trabalho de conclusão de curso."
            texts={[
              'A aplicação foi desenvolvida com o objetivo de ser uma plataforma digital colaborativa e informativa, em que se pode cadastrar informações como iluminação baixa ou inexistente e casos de assédio, assaltos e mortes nas ruas de Belo Horizonte. Essas informações são coletadas e expostas no mapa da página principal da aplicação, para que seja de conhecimento de todos aqueles que acessarem a aplicação.',
            ]}
          />
          <div className="icon">
            <WomanIcon />
          </div>
          <InfoSection
            title="Como funciona?"
            text="A coleta de dados da aplicação é feita por meio do cadastro de ocorrências pelos usuários da aplicação. Após esse cadastro, as informações da ocorrência são tratadas, para que nenhum dado pessoal de quem cadastrou seja identificado, e expostas na página principal da aplicação."
            texts={[
              'Essas informações são expostas de duas formas, na primeira delas, as ocorrências são exibidas da forma que foram cadastradas. Sendo que, elas contem informações sobre o local onde ocorreram, data e tipo da ocorrência, sendo esses tipos relacionados a iluminação, importunação sexual, assalto e morte.',
              'Na segunda forma, as ocorrências são tratadas e agrupadas, sendo que, cada agrupamento de dados representa o risco daquela área, onde, em locais com tons de vermelho mais escuros, a incidência de ocorrências foi maior do que nos locais com tons de vermelho ou sem nenhum agrupamento.',
            ]}
          />
        </Box>
      </main>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
