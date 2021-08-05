import React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonStyles from './Button.styles';

interface Props {
  title: string;
}

const Button: React.FunctionComponent<Props> = ({ title }) => {
  const classes = ButtonStyles();
  return (
    <ButtonComponent className={classes.container}>
      <Typography>{title}</Typography>
    </ButtonComponent>
  );
};

export default Button;
