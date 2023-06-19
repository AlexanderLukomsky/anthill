import * as yup from 'yup';

const email = yup.string().email('Invalid email address').required('Required');

const password = yup
  .string()
  .min(6, 'must be at least 6 characters')
  .max(20, 'must be shorter than or equal to 20 characters')
  .required('Required');

const confirmPassword = yup
  .string()
  .required('Required')
  .oneOf([yup.ref('password')], 'The password must match the new password');

export const signInSchema = yup.object().shape({
  email,
  password,
});

export const registrationSchema = yup.object().shape({
  email,
  password,
  confirmPassword,
});

export const newPasswordSchema = yup.object().shape({
  email,
  password,
  confirmPassword,
});

export type RegistrationSchema = yup.InferType<typeof registrationSchema>;

export type SignInSchema = yup.InferType<typeof signInSchema>;

export type NewPasswordSchema = yup.InferType<typeof newPasswordSchema>;
