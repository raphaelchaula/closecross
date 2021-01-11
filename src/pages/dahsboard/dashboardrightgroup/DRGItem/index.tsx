import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import SpeedIcon from '@material-ui/icons/Speed';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// DRGItem Components
import DRGItemColumn from './DRGItemColumn';
import DRGItemLineChart from './DRGItemLineChart';
import DRGItemSplineChart from './DRGItemSplineChart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      borderRadius: theme.spacing(2),
      border: `1px solid ${theme.palette.grey[500]}`,
      backgroundColor: theme.palette.background.paper,
    }
  }),
);

type DRGItemProps = {
  amount: string
}

const DRGItem: FunctionComponent<DRGItemProps> = ({ amount }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <Grid container spacing={1} alignItems="center" justify="space-between" >
        <Grid item xs={3}>
          <DRGItemColumn title="ETH 48 hours" subtitle="Crypto" leadingIcon={<StarOutlineIcon/>} rightBordered />
        </Grid>
        <Grid item xs={1}>
          <DRGItemColumn mixedTitle="2,2x" subtitle="Crypto" mixedTitleIcon={<SpeedIcon/>} />
        </Grid>
        <Grid item xs={3}>
          <DRGItemSplineChart/>
        </Grid>
        <Grid item xs={2}>
          <DRGItemLineChart/>
        </Grid>
        <Grid item xs={2}>
          <DRGItemColumn title={amount} subtitle="Total commitment funds" />
        </Grid>
      </Grid>
    </div>
  );
};

export default DRGItem;