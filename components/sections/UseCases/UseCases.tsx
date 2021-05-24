import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UseCase from '../../UseCase';
import { colors } from '../../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: theme.spacing(41.25),
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: theme.spacing(2, 5),
      margin: theme.spacing(5, 0),
      backgroundColor: colors.white,
      [theme.breakpoints.down('xs')]: {
        flexFlow: 'column',
        alignItems: 'center',
        height: theme.spacing(125),
      },
    },
  }),
);

export default function UseCases(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UseCase
        icon={<img src="/home/desktop/icon-personal-finances.svg" />}
        title="Personal Finances"
        body="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
      />
      <UseCase
        icon={<img src="/home/desktop/icon-banking-and-coverage.svg" />}
        title="Banking & Coverage"
        body="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
      />
      <UseCase
        icon={<img src="/home/desktop/icon-consumer-payments.svg" />}
        title="Consumer Payments"
        body="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
      />
    </div>
  );
}
