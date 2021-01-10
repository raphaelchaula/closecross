import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Dashboard components
import DashboardOpenTrades from './OpenTrades';
import DashboardTradingWallet from './TradingWallet';
import DashboardTradingHistory from './TradingHistory';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(3),
    },
  }),
);

const DashboardLeftGroup: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DashboardOpenTrades/>
      <DashboardTradingHistory/>
      <DashboardTradingWallet/>
    </div>
  );
};

export default DashboardLeftGroup;