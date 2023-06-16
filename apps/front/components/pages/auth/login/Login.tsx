'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'mui.lib';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { LoginData, loginSchema } from 'common/validation';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import Link from 'next/link';
import { forgotLinkStyle } from './style';
import { SignLinkStyle, buttonStyle, descriptionStyle, inputStyle, titleStyle } from '../style';

export const Login = () => {
  const { control, clearErrors, handleSubmit } = useForm<LoginData>({
    defaultValues: { email: '', password: '' },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (formData: LoginData) => {
    console.log('submit');
  };

  return (
    <AuthForm>
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
          helperText=""
        />

        <InputWithHookForm
          clearErrors={() => {
            clearErrors();
          }}
          control={control}
          name="password"
          label="Password"
          type="password"
          helperText=""
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
