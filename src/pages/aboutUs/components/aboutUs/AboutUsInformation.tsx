import Box from '@material-ui/core/Box';
import React from 'react';
import AboutUsInformationStyles from './AboutUsInformation.styles';
import Container from '../../../../components/container/container';

const AboutUsInformation: React.FunctionComponent = () => {
  const classes = AboutUsInformationStyles();

  return (
    <Container>
      <Box className={classes.container} />
    </Container>
  );
};

export default AboutUsInformation;
