'use client';

import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import Link from 'next/link';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import { RegistrationData, registrationSchema } from 'common/validation';
import { SignLinkStyle, buttonStyle, descriptionStyle, inputStyle, titleStyle } from '../style';

export const Registration = () => {
  const { handleSubmit, clearErrors, control } = useForm<RegistrationData>({
    resolver: yupResolver(registrationSchema),
    reValidateMode: 'onSubmit',
    defaultValues: { userName: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (values: RegistrationData) => {
    console.log('submit', values);
  };

  const handleClearErrors = () => {
    clearErrors();
  };

  return (
    <AuthForm>
      <Typography variant="h1" sx={titleStyle}>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleClearErrors}
          control={control}
          name="userName"
          label="Username"
          helperText=""
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleClearErrors}
          control={control}
          name="email"
          label="Email"
          helperText=""
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleClearErrors}
          control={control}
          name="password"
          label="Password"
          type="password"
          helperText=""
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleClearErrors}
          control={control}
          name="confirmPassword"
          label="Password confirmation"
          type="password"
          helperText=""
        />

        <Button sx={buttonStyle} type="submit">
          Sign Up
        </Button>
      </form>

      <Typography variant="regular_text_16" sx={descriptionStyle}>
        Do you have an account?
      </Typography>

      <Link href={AuthPages.Login}>
        <Typography component="p" sx={SignLinkStyle} variant="regular_text_16">
          Sign Up
        </Typography>
      </Link>
    </AuthForm>
  );
};
