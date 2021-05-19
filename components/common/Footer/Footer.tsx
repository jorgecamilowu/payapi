import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { colors } from '../../../theme';
// constants
import links from '../../../constants/routesMetaData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: theme.spacing(12.5),
      backgroundColor: colors.darkBlue,
      padding: theme.spacing(0, 6),
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        height: theme.spacing(46.8),
        flexFlow: 'column',
      },
    },
    logo: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    links: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexFlow: 'column',
      },
    },
    iconItems: {
      flex: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        flex: 1,
      },
    },
    icon: {
      margin: theme.spacing(0, 1),
    },
    link: {
      color: colors.lightBlue,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: theme.spacing(0, 1.5),
    },
    bgCircle: {
      position: 'absolute',
      top: -80,
      right: -320,
      [theme.breakpoints.down('md')]: {
        right: -420,
      },
      [theme.breakpoints.down('xs')]: {
        top: '51%',
        left: '50%',
        transform: 'translateX(-68%)',
      },
    },
  }),
);

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bgCircle}>
        <Image src="/shared/desktop/bg-pattern-circle.svg" layout="fill" />
      </div>
      <div className={classes.logo}>
        <Image src="/shared/desktop/logo-light.svg" width={135} height={38} />
      </div>
      <div className={classes.links}>
        {links.map((link) => (
          <div key={`link-${link.text}`} className={classes.link}>
            <ListItem button>
              <Link href={link.href}>
                <Typography variant="body1">{link.text}</Typography>
              </Link>
            </ListItem>
          </div>
        ))}
      </div>
      <div className={classes.iconItems}>
        <IconButton className={classes.icon}>
          <Image src="/shared/desktop/facebook.svg" height={24} width={24} />
        </IconButton>
        <IconButton className={classes.icon}>
          <Image src="/shared/desktop/twitter.svg" height={24} width={24} />
        </IconButton>
        <IconButton className={classes.icon}>
          <Image src="/shared/desktop/linkedin.svg" height={24} width={24} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
