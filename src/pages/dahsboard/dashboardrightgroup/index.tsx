import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Toolbar Components
import DRGToolbar from './DRGToolbar';
import DRGItem from './DRGItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginTop: theme.spacing(2),
      paddingTop: theme.spacing(3),
    },
  }),
);

const amounts: string[] = ["$ 34,346.00", "$ 329,146.00", "$ 129,146.00"];

const DashboardRightGroup: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DRGToolbar/>
      {amounts.map((amount) => <DRGItem amount={amount} />)}
    </div>
  );
};

export default DashboardRightGroup;