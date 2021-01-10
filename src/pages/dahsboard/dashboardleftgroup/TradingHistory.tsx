import React, { FunctionComponent, ReactChild, useState } from 'react';
import clsx from 'clsx';
import Chart from 'react-apexcharts';
import { Trans } from '@lingui/macro';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// OpenTrades Components
import DLGRow from './DLGRow';
import DLGHeader from './DLGHeader';
import DLGColumn from './DLGColumn';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
    buttongroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    button: {
      fontSize: 12,
      borderRadius: 5,
      padding: "6px 12px",
    },
    buttonactive: {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.primary[theme.palette.type],
    },
    buttoninactive: {
      backgroundColor: "transparent",
      color: theme.palette.common.white,
    },
    chartcontainer: {
      width: "100%",
      marginTop: -theme.spacing(1),
    },
    divider: {
      marginTop: -theme.spacing(2),
    }
  }),
);

const THTimes = new Map<string, ReactChild>();
THTimes.set("th-last", <Trans>last</Trans>);
THTimes.set("th-day", <Trans>day</Trans>);
THTimes.set("th-week", <Trans>week</Trans>);
THTimes.set("th-month", <Trans>month</Trans>);
THTimes.set("th-all", <Trans>all</Trans>);

type THButtonProps = {
  key: string,
  active: boolean,
  onClick: () => void,
};

const THButton: FunctionComponent<THButtonProps> = ({ key, active, onClick, children }) => {
  const classes = useStyles();
  return (
    <ButtonBase
      key={key}
      onClick={() => onClick()}
      className={clsx(classes.button, active ? classes.buttonactive: classes.buttoninactive)}
    >
      {children}
    </ButtonBase>
  );
};

const THButtonGroup: FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<string>("th-week");
  const classes = useStyles();

  const THTChildren: ReactChild[] = [];
  THTimes.forEach((value, key) => {
    THTChildren.push(
      <THButton
        key={key}
        children={value}
        active={activeItem === key}
        onClick={() => setActiveItem(key)}
      />
    );
  });

  return (
    <div className={classes.container} >
      <ButtonGroup
        size="small" 
        variant="text"
        className={classes.buttongroup}
      >
        { THTChildren }
      </ButtonGroup>
    </div>
  );
};

const Options = {
  chart: {
    id: "Apex",
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003],
    labels: {
      show: false
    },
    axisBorder: {
      show:  false,
    },
    axisTicks: {
      show:  false,
    },
    crosshairs: {
      show:  false,
    },
    tooltip: {
      enabled: false,
    }
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    show: false,
    curve: 'smooth',
    lineCap: 'round',
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#9AC802"],
  fill: {
    type: 'gradient',
  }
};

const Series = [
  {
    name: "History",
    data: [45, 40, 45, 50, 50, 60, 70, 60, 49, 50, 45, 40, 45]
  }
];

const THChart: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.chartcontainer} >
      <Chart options={Options} series={Series} type="area" width="100%" />
    </div>
  );
};

const DashboardTradingHistory: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DLGHeader title="Trading History" leadingIcon={<TrendingUpIcon/>} />
      <THButtonGroup/>
      <DLGRow>
        <DLGColumn title="Total trades" subtitle="245" />
        <DLGColumn title="Profit" subtitle="+21.5%" />
      </DLGRow>
      <THChart/>
      <Divider className={classes.divider} />
    </div>
  );
};

export default DashboardTradingHistory;