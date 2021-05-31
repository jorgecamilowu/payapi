import { formatMoney } from '../format';

describe('functional test suite', () => {
  it('correctly formats numbers lower than 1000', () => {
    expect(formatMoney(100)).toBe('$100');
  });

  it('correctly formats numbers higher than 1000', () => {
    expect(formatMoney(25900)).toBe('$25,900');
  });

  it('correctly formats numbers with decimals', () => {
    expect(formatMoney(2500.99)).toBe('$2,500.99');
  });

  it('correctly forces two decimal spaces if provided with less', () => {
    expect(formatMoney(5000.3)).toBe('$5,000.30');
  });

  it('correctly forces two decimal spaces if provided with more', () => {
    expect(formatMoney(5000.2222222222)).toBe('$5,000.22');
  });

  it('correctly formats for string numbers', () => {
    expect(formatMoney('100')).toBe('$100');
  });

  it('correctly forces decimals on whole numbers', () => {
    expect(formatMoney(1000, true)).toBe('$1,000.00');
  });
});
