import React from 'react';
import Grid from '@material-ui/core/Grid';
import { mockBenefitsCatalog, mockPricingPlan } from '../__mocks__';
import PricingPlanContainer from '../components/PricingPlanContainer';

export default {
  title: 'Components/PricingPlan',
  component: PricingPlanContainer,
};

export const Default = (): JSX.Element => (
  <Grid container justify="center" alignItems="center">
    <PricingPlanContainer
      plan={mockPricingPlan}
      catalog={mockBenefitsCatalog}
    />
  </Grid>
);
