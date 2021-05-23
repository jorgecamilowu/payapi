import React, { ReactElement } from 'react';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import UseCase from '../../UseCase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: theme.spacing(41.25),
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing(2, 2),
      [theme.breakpoints.down('xs')]: {
        flexFlow: 'column',
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
        icon={
          <Image src="/home/desktop/icon-personal-finances.svg" layout="fill" />
        }
        title="Personal Finances"
        body="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
      />
      <UseCase
        icon={
          <Image
            src="/home/desktop/icon-banking-and-coverage.svg"
            layout="fill"
          />
        }
        title="Banking & Coverage"
        body="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
      />
      <UseCase
        icon={
          <Image src="/home/desktop/icon-consumer-payments.svg" layout="fill" />
        }
        title="Consumer Payments"
        body="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
      />
    </div>
  );
}
