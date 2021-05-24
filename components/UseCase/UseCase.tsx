import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: theme.spacing(4, 0),
      maxWidth: theme.spacing(43),
      [theme.breakpoints.down('xs')]: {
        maxWidth: '90vw',
      },
    },
    title: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
  }),
);

interface Props {
  icon?: React.ReactNode;
  title?: string;
  body?: string;
}

export default function UseCase({ icon, title, body }: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{icon}</div>
      <div>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {body}
        </Typography>
      </div>
    </div>
  );
}
