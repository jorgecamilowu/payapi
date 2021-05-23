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
        order: 1,
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
      [theme.breakpoints.down('md')]: {
        order: 0,
      },
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(55),
      },
    },
  }),
);
export default function Simplicity(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textBlock}>
        <Typography variant="h2" className={classes.title}>
          Simple UI & UX
        </Typography>
        <Typography variant="body1" paragraph>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </Typography>
      </div>
      <div>
        <Image
          className={classes.img}
          src="/home/desktop/illustration-simple-ui.svg"
          layout="fill"
        />
      </div>
    </div>
  );
}
