/* eslint-disable */
import { ObjectSchema, object, string } from 'yup';

/**
 * Returns an instance of the validation schema for the Main Section
 */
const makeValidationSchema = (): ObjectSchema<{}> =>
  object().shape({
    email: string()
      .required('Please provide an email')
      .email('invalid email format'),
  });

export default makeValidationSchema;
