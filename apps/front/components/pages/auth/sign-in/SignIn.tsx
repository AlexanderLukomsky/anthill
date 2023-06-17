'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'lib/mui';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { SignInSchema, signInSchema } from 'common/validation';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import Link from 'next/link';
import { useSignInMutation } from 'services/auth/api';
import { SignLinkStyle, buttonStyle, descriptionStyle, inputStyle, titleStyle } from '../style';
import { forgotLinkStyle } from './style';

export const SignIn = () => {
  const [signIn, { isLoading }] = useSignInMutation();

  const { push } = useRouter();

  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    defaultValues: { email: '', password: '' },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (formData: Required<SignInSchema>) => {
    if (isLoading) return;

    await signIn(formData).unwrap();

    push('/');
  };

  return (
    <AuthForm isLoading={isLoading}>
      <Typography color="light.100" variant="h1" sx={titleStyle}>
        Sign in
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={() => {
            clearErrors();
          }}
          control={control}
          name="email"
          label="Email"
          type="text"
          error={!!errors.email}
          helperText={errors.email?.message || ''}
        />

        <InputWithHookForm
          clearErrors={() => {
            clearErrors();
          }}
          control={control}
          name="password"
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message || ''}
        />

        <Link href={AuthPages.NewPassword}>
          <Typography sx={forgotLinkStyle} color="light.900" variant="regular_text_14">
            Forgot Password
          </Typography>
        </Link>

        <Button sx={buttonStyle} color="primary" type="submit">
          Sign In
        </Button>
      </form>

      <Typography color="light.100" component="p" sx={descriptionStyle} variant="regular_text_16">
        Don&apos;t have an account?
      </Typography>

      <Link href={AuthPages.Registration}>
        <Typography component="p" sx={SignLinkStyle} variant="regular_text_16">
          Sign Up
        </Typography>
      </Link>
    </AuthForm>
  );
};
