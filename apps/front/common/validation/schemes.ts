import * as yup from 'yup';

const email = yup.string().email('Invalid email address').required('Required');

const password = yup
  .string()
  .min(4, 'must be at least 6 characters')
  .max(20, 'must be shorter than or equal to 20 characters')
  .required('Required');

export const loginSchema = yup.object().shape({
  email,
  password,
});

export const registrationSchema = yup.object().shape({
  userName: yup
    .string()
    .min(6, 'must be at least 4 characters')
    .max(15, 'must be shorter than or equal to 15 characters')
    .required('Required'),
  email,
  password,
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'The password must match the new password'),
});

export type LoginData = yup.InferType<typeof loginSchema>;
export type RegistrationData = yup.InferType<typeof registrationSchema>;
