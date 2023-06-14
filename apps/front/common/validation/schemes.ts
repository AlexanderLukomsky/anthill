import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .min(4, 'must be at least 6 characters')
    .max(20, 'must be shorter than or equal to 20 characters')
    .required('Required'),
});

export type LoginData = yup.InferType<typeof loginSchema>;
