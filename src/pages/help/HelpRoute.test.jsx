import Box from '@material-ui/core/Box';
import { shallow } from 'enzyme';
import React from 'react';
import CreateOccurrenceButtonImage from '../../assets/help-page/createOccurrenceButton.png';
import LoginImage from '../../assets/help-page/login.jpeg';
import occurrenceDetailsImage from '../../assets/help-page/occurrenceDetails.jpg';
import ListOccurrencesImage from '../../assets/help-page/occurrenceList.png';
import OccurrenceAndRiskZoneImage from '../../assets/help-page/ocorrencias-and-risk-zone.png';
import TextWithImage from './components/textWithImage/TextWithImage';
import HelpRoute from './HelpRoute';
import useHelpRouteStyles from './HelpRoute.styles';

jest.mock('./HelpRoute.styles');
mockUseStyles(useHelpRouteStyles, ['container', 'information']);

describe('HelpRoute', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HelpRoute />);
    const expectedWrapper = (
      <main className="container">
        <Box className="information">
          <TextWithImage
            title="Criação de usuário e Login"
            text="Para acessar algumas funcionalidades como criar ocorrências, será necessário possuir uma conta no BH mais segura para elas. Sendo assim, para criar a conta você precisa acessar a opção de número 2 na imagem abaixo. Após isso, você será capaz de logar na aplicação acessando a opção de número 1 na imagem abaixo."
            imagePath={LoginImage}
          />
          <TextWithImage
            title="Mapa"
            text="A aplicação BH mais segura para elas possui duas formas de visualização das ocorrências, a primeira é visualizando cada uma das ocorrências. E, a outra é uma visão de ocorrência agrupadas pela localização. A partir desse agrupamento, somos capazes de mostrar quão perigoso é uma área, e assim , quanto mais vermelho é o círculo mais perigosa é a área"
            imagePath={OccurrenceAndRiskZoneImage}
          />
          <TextWithImage
            title="Detalhes de uma ocorrência"
            text="Para visualizar as informações de uma ocorrência, você terá que clicar no seu icone dentro do mapa. Após isso, você conseguirá visualizar os detalhes conforme a imagem abaixo."
            imagePath={occurrenceDetailsImage}
          />
          <TextWithImage
            title="Criação de uma ocorrência"
            text="Para criar uma ocorrência você precisa acessar a opção do menu ocorrências e clicar no botão indicado pelo número 5"
            imagePath={CreateOccurrenceButtonImage}
          />
          <TextWithImage
            title="Listagem de ocorrências"
            text="Por fim, cada uma das ocorrências criadas por você serão exibidas na lista 'Ocorrências cadastradas'. E, a partir dela, você consegue deletar a ocorrência clicando no ícone que é indicado pelo número 6. E, também, caso você queira editar as informação de uma ocorrência, você precisa clicar no ícone indicado pelo número 7."
            imagePath={ListOccurrencesImage}
          />
        </Box>
      </main>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
