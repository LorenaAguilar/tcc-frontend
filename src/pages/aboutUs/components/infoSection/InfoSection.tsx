import { Typography } from '@material-ui/core';
import React from 'react';
import useInfoSectionStyles from './InfoSection.styles';

interface Props {
  title: string;
  text: string;
  texts?: Array<string>;
}

const InfoSection: React.FunctionComponent<Props> = ({ title, text, texts }) => {
  const { firstText, otherTexts } = useInfoSectionStyles();
  return (
    <section>
      <Typography component="h2" variant="h2">
        <b>{title}</b>
      </Typography>
      <Typography component="p" className={firstText}>
        {text}
      </Typography>
      {texts?.map((currentText) => (
        <Typography key={currentText.slice(0, 10)} className={otherTexts} component="p">
          {currentText}
        </Typography>
      ))}
    </section>
  );
};

export default InfoSection;
