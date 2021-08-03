import { Box } from '@material-ui/core';
import React from 'react';
import AboutUsInformationStyles from './AboutUsInformation.style';
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
