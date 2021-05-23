import { ValidationError, ObjectSchema } from 'yup';

type FormValueTypes = string | boolean | number | Date;
type ErrorDict = { [key: string]: string };

/**
 * Helper function to extract error from Yup validation schema
 */
function ValidateSchema(
  obj: { [key: string]: FormValueTypes },
  schema: ObjectSchema<{}>,
): ErrorDict {
  const errors: ErrorDict = {};
  try {
    schema.validateSync(obj, { abortEarly: false });
  } catch (e) {
    // extract errors from the Error event
    const innerErrors = e.inner as Array<ValidationError>;

    // append caught errors
    innerErrors.forEach(
      (currError) => (errors[currError.path] = currError.message),
    );
  }

  return errors;
}

export default ValidateSchema;
