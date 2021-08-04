import React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import ButtonStyles from './Button.style';

interface Props {
  title: string;
}

const Button: React.FunctionComponent<Props> = ({ title }) => {
  const classes = ButtonStyles();
  return <ButtonComponent className={classes.container}>{title}</ButtonComponent>;
};

export default Button;
