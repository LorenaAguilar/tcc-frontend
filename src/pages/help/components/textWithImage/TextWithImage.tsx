import Typography from '@material-ui/core/Typography';
import React from 'react';
import useTextWithImageStyles from './TextWithImage.styles';

interface Props {
  title: string;
  text: string;
  texts?: Array<string>;
  imagePath: string;
}

const TextWithImage: React.FunctionComponent<Props> = ({ title, text, texts, imagePath }) => {
  const { container, media, firstText, otherTexts, titleStyle } = useTextWithImageStyles();

  return (
    <section>
      <Typography component="h2" variant="h2" className={titleStyle}>
        <b>{title}</b>
      </Typography>
      <div className={container}>
        <img src={imagePath} className={media} alt="Something" />
        <Typography className={firstText} component="p">
          {text}
        </Typography>
      </div>
      {texts?.map((currentText) => (
        <Typography key={currentText.slice(0, 10)} className={otherTexts} component="p">
          {currentText}
        </Typography>
      ))}
    </section>
  );
};

export default TextWithImage;
