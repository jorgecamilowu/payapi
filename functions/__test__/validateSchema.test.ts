import { object, string } from 'yup';
import validateSchema from '../validateSchema';

describe('validateSchema test suite', () => {
  const objectSchema = object().shape({
    fooInput: string().required('fooErrorMessage'),
  });

  it('correctly generates error for invalid input', () => {
    const result = validateSchema({}, objectSchema);
    expect(result).toEqual({
      fooInput: 'fooErrorMessage',
    });
  });

  it('correctly returns an empty object for valid input', () => {
    const result = validateSchema({ fooInput: 'value' }, objectSchema);
    expect(result).toEqual({});
  });
});
