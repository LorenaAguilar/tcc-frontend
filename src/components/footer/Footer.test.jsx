import React from 'react';
import { shallow } from 'enzyme';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FooterStyles from './Footer.styles';
import Footer from './Footer';

jest.mock('./Footer.styles');

mockUseStyles(FooterStyles, ['container', 'textContainer']);

describe('Footer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Footer />);

    const expectedWrapper = (
      <Box className="container">
        <div className="textContainer">
          <Typography variant="h4">
            Copyright © 2021 BH mais segura para elas. Todos os direitos reservados.
          </Typography>
        </div>
      </Box>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
