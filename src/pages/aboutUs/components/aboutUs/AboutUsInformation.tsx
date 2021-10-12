import Box from '@material-ui/core/Box';
import React from 'react';
import InfoSection from '../infoSection/InfoSection';
import AboutUsInformationStyles from './AboutUsInformation.styles';

const AboutUsInformation: React.FunctionComponent = () => {
  const classes = AboutUsInformationStyles();

  return (
    <main className={classes.container}>
      <Box className={classes.information}>
        <InfoSection
          title="Sobre"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <InfoSection
          title="Quem Somos"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </Box>
    </main>
  );
};

export default AboutUsInformation;
