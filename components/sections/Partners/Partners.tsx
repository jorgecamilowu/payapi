import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      minHeight: theme.spacing(59),
      backgroundColor: colors.darkBlue,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: theme.spacing(0, 10),
      [theme.breakpoints.down('md')]: {
        flexFlow: 'column',
        justifyContent: 'center',
        gap: theme.spacing(5, 0),
        minHeight: theme.spacing(96),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
        minHeight: theme.spacing(80),
        gap: theme.spacing(3, 0),
      },
    },
    textBlock: {
      display: 'flex',
      flexFlow: 'column',
      maxWidth: theme.spacing(55.625),
      gap: theme.spacing(2, 0),
      [theme.breakpoints.down('md')]: {
        order: 1,
        alignItems: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: theme.spacing(40.875),
      },
    },
    logoBlock: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        order: 0,
      },
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'auto auto',
      },
    },
    textColor: {
      color: colors.white,
    },
    icon: {
      margin: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(13.375),
      },
    },
    btn: {
      width: theme.spacing(16.125),
    },
    title: {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4),
      },
    },
    paragraph: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    bgCircle: {
      position: 'absolute',
      top: '-80%',
      left: '-18%',
      [theme.breakpoints.down('md')]: {
        top: '-60%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      [theme.breakpoints.down('xs')]: {
        top: '-93%',
      },
    },
  }),
);

export default function Partners(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textBlock}>
        <Typography
          variant="h2"
          className={clsx(classes.textColor, classes.title)}
        >
          Who we work with
        </Typography>
        <Typography
          variant="body1"
          paragraph
          className={clsx(classes.textColor, classes.paragraph)}
        >
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </Typography>
        <Button variant="outlined" color="primary" className={classes.btn}>
          About Us
        </Button>
      </div>
      <div className={classes.logoBlock}>
        <Image
          src="/shared/desktop/tesla.svg"
          layout="fill"
          color="#fff"
          className={classes.icon}
        />
        <Image
          src="/shared/desktop/microsoft.svg"
          layout="fill"
          className={classes.icon}
        />
        <Image
          src="/shared/desktop/hewlett-packard.svg"
          layout="fill"
          className={classes.icon}
        />
        <Image
          src="/shared/desktop/oracle.svg"
          layout="fill"
          className={classes.icon}
        />
        <Image
          src="/shared/desktop/google.svg"
          layout="fill"
          className={classes.icon}
        />
        <Image
          src="/shared/desktop/nvidia.svg"
          layout="fill"
          className={classes.icon}
        />
      </div>
      <Image
        src="/shared/desktop/bg-pattern-circle.svg"
        layout="fill"
        className={classes.bgCircle}
      />
    </div>
  );
}
