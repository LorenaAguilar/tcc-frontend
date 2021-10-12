import { Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  text: string;
}

const InfoSection: React.FunctionComponent<Props> = ({ title, text }) => (
  <section>
    <Typography component="h2" variant="h2">
      <b>{title}</b>
    </Typography>
    <Typography component="p">{text}</Typography>
  </section>
);

export default InfoSection;
