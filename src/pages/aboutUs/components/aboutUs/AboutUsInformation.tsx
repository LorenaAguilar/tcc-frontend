import Box from '@material-ui/core/Box';
import React from 'react';
import AboutUsInformationStyles from './AboutUsInformation.styles';

const AboutUsInformation: React.FunctionComponent = () => {
  const classes = AboutUsInformationStyles();

  return (
    <main className={classes.container}>
      <Box className={classes.information} />
    </main>
  );
};

export default AboutUsInformation;
