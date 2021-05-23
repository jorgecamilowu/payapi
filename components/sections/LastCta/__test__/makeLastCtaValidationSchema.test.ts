import validateSchema from '../../../../functions/validateSchema';
import makeLastCtaValidationSchema from '../makeLastCtaValidationSchema';

describe('Test suits for the Main section validation schema', () => {
  it('should should show error for missing email', () => {
    const currentShape = { email: '' };
    const errors = validateSchema(currentShape, makeLastCtaValidationSchema());
    expect(errors).toEqual({
      email: 'Please provide an email',
    });
  });
  it('should should show error for incorrect email format', () => {
    const currentShape = { email: 'sjdkf' };
    const errors = validateSchema(currentShape, makeLastCtaValidationSchema());
    expect(errors).toEqual({
      email: 'invalid email format',
    });
  });
});
