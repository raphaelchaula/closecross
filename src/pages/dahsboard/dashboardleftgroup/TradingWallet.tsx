import { FunctionComponent } from 'react';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

// OpenTrades Components
import DLGHeader from './DLGHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    row: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: theme.spacing(1),
    },
    rowtexts: {
      textAlign: "left"
    },
    rowtitle: {
      fontSize: 12,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightLight,
    },
    rowsubtitle: {
      fontSize: 18,
      marginTop: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    },
    rowsmallsubtitle: {
      fontSize: 14,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular,
    },
    rowbutton: {
      width: 76,
      height: 28,
      fontSize: 14,
      borderRadius: 5,
      textTransform: "uppercase",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.primary[theme.palette.type],
    },
    rowbuttonoutlined: {
      backgroundColor: "transparent",
      color: theme.palette.primary[theme.palette.type],
      border: `1px solid ${theme.palette.primary[theme.palette.type]}`
    }
  }),
);

type TWRowProps = {
    title: string,
    subtitle: string,
    buttonLabel: string,
    smallSubtitle?: boolean,
    buttonOutlined?: boolean,
}

const TWRow: FunctionComponent<TWRowProps> = ({ title, subtitle, buttonLabel, smallSubtitle, buttonOutlined }) => {
  const classes = useStyles();
  return(
    <div className={classes.row} >
      <div className={classes.rowtexts} >
        <Typography className={classes.rowtitle} >{title}</Typography>
        <Typography className={clsx(classes.rowsubtitle, smallSubtitle ? classes.rowsmallsubtitle : null)} >
          {subtitle}
        </Typography>
      </div>
      <ButtonBase className={clsx(classes.rowbutton, buttonOutlined ? classes.rowbuttonoutlined : null)} >
        {buttonLabel}
      </ButtonBase>
    </div>
  );
};

const DashboardTradingWallet: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DLGHeader title="Training wallet" leadingIcon={<AccountBalanceWalletIcon/>} />
      <TWRow title="Trading" subtitle="$ 34,752.00" buttonLabel="Top up" />
      <TWRow title="Holding" subtitle="$ 4,102.00" buttonLabel="BuY DAI" smallSubtitle buttonOutlined />
    </div>
  );
};

export default DashboardTradingWallet;