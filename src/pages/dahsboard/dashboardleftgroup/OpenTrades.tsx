import { FunctionComponent } from 'react';
import Divider from '@material-ui/core/Divider';
import TimelineIcon from '@material-ui/icons/Timeline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// OpenTrades Components
import DLGRow from './DLGRow';
import DLGHeader from './DLGHeader';
import DLGColumn from './DLGColumn';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
    },
    divider: {
      marginTop: theme.spacing(3),
    }
  }),
);

const DashboardOpenTrades: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DLGHeader title="Open Trades" leadingIcon={<TimelineIcon/>} />
      <DLGRow>
        <DLGColumn title="Trades in progress" subtitle="15" />
        <DLGColumn title="Closest outcome" subtitle="25m 40s" extra="ETH 48 hour" />
      </DLGRow>
      <Divider className={classes.divider}/>
    </div>
  );
};

export default DashboardOpenTrades;