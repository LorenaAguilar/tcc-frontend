import { makeStyles } from '@material-ui/core/styles';

const useNotificationViewStyle = makeStyles(() => ({
  content: {
    fontSize: 16,
    lineHeight: '20px',
    padding: '10px 12px 10px 16px',
    '& div': {
      display: 'flex',
    },
  },
  SUCCESS: {
    backgroundColor: 'green',
  },
  ERROR: {
    backgroundColor: 'red',
  },
  close: {
    '& svg': {
      fontSize: '14px',
    },
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  root: {
    marginTop: (props) => props.index * 70,
  },
}));

export default useNotificationViewStyle;
