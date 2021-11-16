import Typography from '@material-ui/core/Typography';
import React from 'react';
import useTextWithImageStyles from './TextWithImage.styles';

interface Props {
  title: string;
  text: string;
  imagePath: string;
}

const TextWithImage: React.FunctionComponent<Props> = ({ title, text, imagePath }) => {
  const { container, media, firstText, titleStyle } = useTextWithImageStyles();

  return (
    <section>
      <Typography component="h2" variant="h2" className={titleStyle}>
        <b>{title}</b>
      </Typography>
      <Typography className={firstText} component="p">
        {text}
      </Typography>
      <div className={container}>
        <img src={imagePath} className={media} alt="Something" />
      </div>
    </section>
  );
};

export default TextWithImage;
