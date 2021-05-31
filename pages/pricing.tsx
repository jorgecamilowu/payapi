import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { mockBenefitsCatalog, mockPricingPlan } from '../__mocks__';
// subcomponents
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PricingPlanContainer from '../components/PricingPlanContainer';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      height: '100vh',
    },
    body: {
      flex: 1,
      padding: theme.spacing(3),
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'auto',
      justifyContent: 'center',
    },
    title: {
      margin: theme.spacing(5, 0),
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4),
        textAlign: 'center',
        margin: theme.spacing(1, 0),
      },
    },
    plans: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexFlow: 'column',
      },
    },
  }),
);

export default function Pricing(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Header
          onCTAClick={() => {
            // no op
          }}
        />
        <div className={classes.container}>
          <Typography variant="subtitle1" className={classes.title}>
            Pricing
          </Typography>
          <div className={classes.plans}>
            <PricingPlanContainer
              plan={mockPricingPlan}
              catalog={mockBenefitsCatalog}
            />
            <PricingPlanContainer
              plan={mockPricingPlan}
              catalog={mockBenefitsCatalog}
            />
            <PricingPlanContainer
              plan={mockPricingPlan}
              catalog={mockBenefitsCatalog}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
