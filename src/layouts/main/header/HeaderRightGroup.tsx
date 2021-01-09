import { FunctionComponent, ReactChild } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0),
    },
    iconbutton: {
      marginRight: theme.spacing(0),
      '& svg': {
        color: theme.palette.grey[600]
      }
    },
    badge: {
      '& .MuiBadge-badge': {
        padding: 0,
        fontSize: 10,
        marginTop: 4,
        marginRight: 2,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.info[theme.palette.type]
      }
    },
    avatar: {
      width: 32,
      height: 32,
      marginLeft: theme.spacing(2),
    }
  }),
);

const HRGIcons = new Map<string, ReactChild>();
HRGIcons.set("search", <Search/>);
HRGIcons.set("star", <StarOutlineIcon/>);
HRGIcons.set("graduation", <SchoolOutlinedIcon/>);

const HRGIcon: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.iconbutton} >
      {children}
    </IconButton>
  );
};

type HRGAvatarProps = {
  avatarUrl: string,
  notificationsCount: number,
}

const HRGAvatar: FunctionComponent<HRGAvatarProps> = ({avatarUrl, notificationsCount}) => {
  const classes = useStyles();
  return (
    <Badge badgeContent={notificationsCount} className={classes.badge}>
      <Avatar className={classes.avatar} alt="Avatar" src={avatarUrl}>A</Avatar>
    </Badge>
  );
};

const HeaderRightGroup: FunctionComponent = () => {
  const classes = useStyles();

  const HRGIconsChildren: ReactChild[] = [];
  HRGIcons.forEach((value, key) => {
    HRGIconsChildren.push(
      <HRGIcon key={key} children={value} />
    );
  });

  return (
    <div className={classes.container} >
      { HRGIconsChildren }
      <HRGAvatar notificationsCount={12} avatarUrl="/avatar.png" />
    </div>
  );
};

export default HeaderRightGroup;