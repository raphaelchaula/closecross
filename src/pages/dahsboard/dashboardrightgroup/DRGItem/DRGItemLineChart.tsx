import { FunctionComponent } from 'react';
import Chart from 'react-apexcharts';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 72,
      height: "100%",
      padding: theme.spacing(0),
      transform: "rotate(90deg)",
      marginTop: -theme.spacing(3),
      marginBottom: -theme.spacing(3),
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
    categories: [1977, 1978, 1979, 1980, 1981, 1982, 1983 ],
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
    show: true,
    borderColor: '#424242',
    xaxis: {
      lines: {
        show: true,
      }
    },   
    yaxis: {
      lines: {
        show: false,
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
    data: [10, 0, 120, 0, 60, 0, 10]
  }
];

const DRGItemLineChart: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <Chart options={Options} series={Series} type="area" width="100%" height={120} />
    </div>
  );
};

export default DRGItemLineChart;