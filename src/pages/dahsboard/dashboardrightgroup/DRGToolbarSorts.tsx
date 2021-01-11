import { FunctionComponent } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      height: 32,
      width: 180,
      fontSize: 14,
      borderRadius: 5,
      outline: 'none',
      cursor: 'pointer',
      textAlign: "left",
      backgroundColor: "transparent",
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[500]}`,
      '& .MuiSelect-select': {
        paddingLeft: theme.spacing(1),
      },
      '& .MuiSelect-icon': {
        color: theme.palette.common.white,
      }
    },
    menuitem: {
      fontSize: 14,
      color: theme.palette.common.white,
    },
  }),
);

const DRGToolbarSorts: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Select
      value="trending"
      input={<InputBase />}
      className={classes.select}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem key="trending" className={classes.menuitem} value="trending" >Trending</MenuItem>
    </Select>
  );
};

export default DRGToolbarSorts;