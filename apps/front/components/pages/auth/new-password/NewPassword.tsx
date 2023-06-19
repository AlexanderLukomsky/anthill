'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'lib/mui';
import { Button } from 'packages.inputs.button';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { NewPasswordSchema, SignInSchema, newPasswordSchema } from 'common/validation';
import { AuthForm } from 'components/layouts/auth/auth-form';
import { AuthPages } from 'common/pages-path/auth-pages';
import Link from 'next/link';
import { useSetNewPasswordMutation } from 'services/auth/api';
import { SignLinkStyle, buttonStyle, inputStyle, titleStyle } from '../style';

export const NewPassword = () => {
  const [setNewPassword, { isLoading }] = useSetNewPasswordMutation();

  const { push } = useRouter();

  const {
    control,
    clearErrors,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<NewPasswordSchema>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(newPasswordSchema),
  });

  const onSubmit = async (formData: Required<SignInSchema>) => {
    if (isLoading) return;

    await setNewPassword(formData).unwrap();

    push(AuthPages.SignIn);
  };

  const handleConfirmPasswordClearErrors = (field: 'confirmPassword') => {
    const { password, confirmPassword } = getValues();

    if (confirmPassword === password) {
      clearErrors(field);
    }
  };

  const handleResetErrors = (field: 'email' | 'password') => {
    clearErrors(field);
  };

  return (
    <AuthForm isLoading={isLoading}>
      <Typography color="light.100" variant="h1" sx={titleStyle}>
        Create New Password
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

        <Typography
          color="light.900"
          component="p"
          sx={{ m: '15px 0 20px' }}
          variant="regular_text_16"
        >
          Your password must be between 6 and 20 characters
        </Typography>

        <Button sx={buttonStyle} color="primary" type="submit">
          Create new password
        </Button>
      </form>

      <Link href={AuthPages.SignIn}>
        <Typography component="p" sx={{ ...SignLinkStyle, mt: '20px' }} variant="regular_text_16">
          Back to Sign In
        </Typography>
      </Link>
    </AuthForm>
  );
};
