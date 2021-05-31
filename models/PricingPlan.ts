import Benefit from './Benefit';

/** Represents a signle pricing plan */
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  benefits: Benefit[]; // list of benefits ids that this plan includes
}

export default PricingPlan;
