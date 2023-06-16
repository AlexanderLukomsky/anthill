'use client';

import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import Link from 'next/link';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import { registrationSchema } from 'common/validation';
import { RegistrationData, authAPI } from 'services/auth';
import { handleError } from 'common/helpers';
import { useState } from 'react';
import { SignLinkStyle, buttonStyle, descriptionStyle, inputStyle, titleStyle } from '../style';

export const Registration = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const {
    handleSubmit,
    clearErrors,
    control,
    getValues,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: yupResolver(registrationSchema),
    reValidateMode: 'onSubmit',
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (values: RegistrationData) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await authAPI.registration(values);
      push('/');
    } catch (error) {
      const errorMessage = handleError(error);
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetErrors = (field: 'email' | 'password') => {
    clearErrors(field);
    setErrorMessage('');
  };

  const handleConfirmPasswordClearErrors = (field: 'confirmPassword') => {
    const { password, confirmPassword } = getValues();

    if (confirmPassword === password) {
      clearErrors(field);
      setErrorMessage('');
    }
  };

  return (
    <AuthForm isLoading={isLoading}>
      <Typography variant="h1" sx={titleStyle}>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleResetErrors}
          control={control}
          name="email"
          label="Email"
          error={!!errors.email?.message || !!errorMessage}
          helperText={errors.email?.message || errorMessage}
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleResetErrors}
          control={control}
          name="password"
          label="Password"
          type="password"
          error={!!errors.password || !!errorMessage}
          helperText={errors.password?.message || errorMessage}
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleConfirmPasswordClearErrors}
          control={control}
          name="confirmPassword"
          label="Password confirmation"
          type="password"
          error={!!errors.confirmPassword || !!errorMessage}
          helperText={errors.confirmPassword?.message || errorMessage}
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
          Sign In
        </Typography>
      </Link>
    </AuthForm>
  );
};
