import React, { ReactElement } from 'react';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(0, 2),
      [theme.breakpoints.down('md')]: {
        flexFlow: 'column',
      },
    },
    textBlock: {
      display: 'flex',
      flexFlow: 'column',
      maxWidth: theme.spacing(55.625),
      gap: theme.spacing(2, 0),
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        maxWidth: theme.spacing(71.625),
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: theme.spacing(40),
      },
    },
    title: {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4.5),
      },
    },
    img: {
      margin: theme.spacing(0, -5, -5, 0),
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(55),
      },
    },
  }),
);

export default function EasyImplementation(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Image
          className={classes.img}
          src="/home/desktop/illustration-easy-to-implement.svg"
          alt="easy-to-implement-illustration"
          layout="fill"
        />
      </div>
      <div className={classes.textBlock}>
        <Typography variant="h2" className={classes.title}>
          Easy to implement
        </Typography>
        <Typography variant="body1" paragraph>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </Typography>
      </div>
    </div>
  );
}
