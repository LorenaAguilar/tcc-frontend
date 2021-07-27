import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const colorLevel900 = 900;
const colorLevel800 = 800;
const colorLevel600 = 600;
const colorLevel400 = 400;
const colorLevel200 = 200;

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.grey[colorLevel900],
    main: black,
    light: colors.indigo[colorLevel800],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[colorLevel900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[colorLevel900],
    main: colors.red[colorLevel600],
    light: colors.red[colorLevel400],
  },
  text: {
    primary: colors.blueGrey[colorLevel900],
    secondary: colors.blueGrey[colorLevel600],
    link: colors.blue[colorLevel600],
    hint: '#707372',
  },
  link: colors.blue[colorLevel800],
  icon: colors.blueGrey[colorLevel600],
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: colors.grey[colorLevel200],
};
