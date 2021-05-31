import { PricingPlan } from '../models';
import mockBenefitCatalog from './mockBenefitCatalog';

const [mockBenefit1, mockBenefit2] = mockBenefitCatalog;

const mockPricingPlan: PricingPlan = {
  id: '1',
  name: 'Mock Plan 1',
  price: 25.99,
  benefits: [mockBenefit1, mockBenefit2],
  description:
    'Proident anim do sint dolore consequat proident laboris occaecat sit incididunt nulla voluptate anim aute.',
};

export default mockPricingPlan;
