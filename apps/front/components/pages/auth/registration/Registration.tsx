'use client';

import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import Link from 'next/link';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import { RegistrationSchema, registrationSchema } from 'common/validation';
import { useRegistrationMutation } from 'services/auth/api';
import { useRouter } from 'next/navigation';
import { SignLinkStyle, buttonStyle, descriptionStyle, inputStyle, titleStyle } from '../style';

export const Registration = () => {
  const [registration, { isLoading }] = useRegistrationMutation();

  const { push } = useRouter();

  const {
    handleSubmit,
    clearErrors,
    control,
    getValues,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: yupResolver(registrationSchema),
    reValidateMode: 'onSubmit',
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (formData: Required<RegistrationSchema>) => {
    if (isLoading) return;

    await registration(formData).unwrap();

    push(AuthPages.SignIn);
  };

  const handleResetErrors = (field: 'email' | 'password') => {
    clearErrors(field);
  };

  const handleConfirmPasswordClearErrors = (field: 'confirmPassword') => {
    const { password, confirmPassword } = getValues();

    if (confirmPassword === password) {
      clearErrors(field);
    }
  };

  return (
    <AuthForm isLoading={isLoading}>
      <Typography color="light.100" variant="h1" sx={titleStyle}>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleResetErrors}
          control={control}
          name="email"
          label="Email"
          error={!!errors.email?.message}
          helperText={errors.email?.message || ''}
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleResetErrors}
          control={control}
          name="password"
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message || ''}
        />

        <InputWithHookForm
          containerProps={{ sx: inputStyle }}
          clearErrors={handleConfirmPasswordClearErrors}
          control={control}
          name="confirmPassword"
          label="Password confirmation"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message || ''}
        />

        <Button sx={buttonStyle} type="submit">
          Sign Up
        </Button>
      </form>

      <Typography color="light.100" variant="regular_text_16" sx={descriptionStyle}>
        Do you have an account?
      </Typography>

      <Link href={AuthPages.SignIn}>
        <Typography component="p" sx={SignLinkStyle} variant="regular_text_16">
          Sign In
        </Typography>
      </Link>
    </AuthForm>
  );
};
