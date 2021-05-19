import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
  makeStyles,
  createStyles,
  Theme,
  lighten,
} from '@material-ui/core/styles';
import { colors } from '../../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      height: theme.spacing(15),
      backgroundColor: 'rgba(0,0,0,0)',
      padding: theme.spacing(5, 22.625),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(5),
      },
    },
    toolbarOffset: {
      minHeight: theme.spacing(12.5),
    },
    linkStyles: {
      color: lighten(colors.blue, 0.5),
      margin: theme.spacing(0, 1.25),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    list: {
      display: 'flex',
    },
    button: {
      maxHeight: theme.spacing(6),
    },
    logo: {
      marginRight: theme.spacing(1.875),
    },
    // styles for drawer
    drawer: {
      opacity: 0.95,
      width: theme.spacing(37.5),
      flexShrink: 0,
    },
    drawerPaper: {
      backgroundColor: colors.darkBlue,
      width: theme.spacing(37.5),
    },
    drawerHeader: {
      display: 'flex',
      height: theme.spacing(15),
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      transform: 'translateY(-20%)',
    },
    drawerListItem: {
      display: 'flex',
      justifyContent: 'center',
    },
    divider: {
      backgroundColor: colors.blue,
    },
  }),
);

const links = [
  {
    text: 'Pricing',
    href: '/pricing',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];

const mapLinks = (): JSX.Element[] => {
  const classes = useStyles();
  return links.map((link) => (
    <ListItem
      key={`link-${link.text.toLowerCase()}`}
      button
      className={classes.drawerListItem}
    >
      <Link href={link.href}>
        <Typography variant="body1" className={classes.linkStyles}>
          {link.text}
        </Typography>
      </Link>
    </ListItem>
  ));
};
type DrawerProps = {
  classes: ReturnType<typeof useStyles>;
  open: boolean;
  onClose: () => void;
  onScheduleDemo: () => void;
};

const drawer = ({
  classes,
  open,
  onClose,
  onScheduleDemo,
}: DrawerProps): JSX.Element => (
  <MuiDrawer
    anchor="right"
    open={open}
    className={classes.drawer}
    classes={{ paper: classes.drawerPaper }}
    data-testid="drawer"
  >
    <Box className={classes.drawerHeader}>
      <IconButton onClick={onClose} data-testid="drawer-close-btn">
        <Image src="/shared/mobile/close.svg" width={23} height={23} />
      </IconButton>
    </Box>
    <Divider variant="middle" className={classes.divider} />
    <List>
      {mapLinks()}
      <ListItem className={classes.drawerListItem}>
        <Button
          variant="contained"
          color="primary"
          onClick={onScheduleDemo}
          fullWidth
          data-testid="drawer-cta"
        >
          Schedule a Demo
        </Button>
      </ListItem>
    </List>
  </MuiDrawer>
);
interface HeaderProps {
  // function called when call to action button is clicked
  onCTAClick: () => void;
}

/** Header that is responsive for desktop, tablet and phone */
const Header: FC<HeaderProps> = ({ onCTAClick }): JSX.Element => {
  const [drawerState, toggleDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} elevation={0} position="absolute">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Box>
              <Grid item xs container alignItems="center">
                <Image
                  src="/shared/desktop/logo.svg"
                  width={135}
                  height={38}
                  className={classes.logo}
                />
                <Hidden xsDown>
                  <List className={classes.list}>{mapLinks()}</List>
                </Hidden>
              </Grid>
            </Box>
            <Hidden xsDown>
              <Grid item xs container justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={onCTAClick}
                  data-testid="call-to-action"
                >
                  Schedule a Demo
                </Button>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs container justify="flex-end">
                <IconButton
                  onClick={(): void => toggleDrawer(true)}
                  data-testid="hamburger"
                >
                  <Image src="/shared/mobile/menu.svg" width={28} height={17} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      {drawer({
        classes,
        open: drawerState,
        onClose: (): void => toggleDrawer(false),
        onScheduleDemo: onCTAClick,
      })}
      <Toolbar className={classes.toolbarOffset} />
    </>
  );
};

export default Header;
