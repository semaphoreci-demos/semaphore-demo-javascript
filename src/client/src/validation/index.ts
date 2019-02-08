import * as Yup from 'yup';

export const userForm = Yup.object({
  username: Yup
    .string()
    .required("username is required"),
  description: Yup
    .string(),
});
