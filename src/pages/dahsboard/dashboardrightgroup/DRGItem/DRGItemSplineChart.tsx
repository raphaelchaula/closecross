import { FunctionComponent } from 'react';
import Chart from 'react-apexcharts';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      padding: theme.spacing(0),
    },
  }),
);

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
    categories: [1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1990, 1991, 1992],
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
    borderColor: '#424242',
    xaxis: {
      lines: {
        show: false,
      }
    },   
    yaxis: {
      lines: {
        show: true,
      }
    }, 
  },
  stroke: {
    width: 2,
    curve: 'smooth',
    lineCap: 'round',
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#9AC802"],
  fill: {
    opacity: 0.6,
    type: 'gradient',
  }
};

const Series = [
  {
    name: "History",
    data: [20, 10, -40, -20, 30, -10, 20, 30, 50, 30, -30, -40, -25, 40, 35, 20, 0]
  }
];

const DRGItemSplineChart: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <Chart options={Options} series={Series} type="area" width="100%" height={76} />
    </div>
  );
};

export default DRGItemSplineChart;