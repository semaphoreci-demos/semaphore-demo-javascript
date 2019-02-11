import * as Yup from 'yup';

export const userForm = Yup.object({
  username: Yup
    .string()
    .required('username is required')
    .default(''),
  description: Yup
    .string()
    .required('description is required')
    .default(''),
  age: Yup
    .number()
    .default(0),
  firstName: Yup
    .string()
    .default(''),
  lastName: Yup
    .string()
    .default(''),
});
