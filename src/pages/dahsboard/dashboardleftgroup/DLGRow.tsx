import { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: theme.spacing(0),
    },
  }),
);

const DLGRow: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.row} >
      { children }
    </div>
  );
};

export default DLGRow;