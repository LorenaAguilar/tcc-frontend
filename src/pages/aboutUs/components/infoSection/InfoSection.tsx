import { Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  text: string;
  texts?: Array<string>;
}

const InfoSection: React.FunctionComponent<Props> = ({ title, text, texts }) => (
  <section>
    <Typography component="h2" variant="h2">
      <b>{title}</b>
    </Typography>
    <Typography component="p">{text}</Typography>
    {texts?.map((currentText) => (
      <Typography key={currentText.slice(0, 10)} component="p">
        {currentText}
      </Typography>
    ))}
  </section>
);

export default InfoSection;
