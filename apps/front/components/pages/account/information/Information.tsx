'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { AccountInformationSchema, accountInformationSchema } from 'common/validation';
import { InformationForm } from 'components/account/information/information-form';
import { UserAvatar } from 'components/account/information/user-avatar';
import { Stack } from 'lib/mui';
import { Button } from 'packages.inputs.button';
import { useForm } from 'react-hook-form';

export const Information = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountInformationSchema>({
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      city: '',
      aboutMe: '',
    },
    resolver: yupResolver(accountInformationSchema),
  });

  const onSubmit = (values: AccountInformationSchema) => {
    console.log(values);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          gap: '36px',
          borderBottom: '1px solid',
          borderColor: 'dark.300',
          mb: '24px',
          pb: '24px',
        }}
      >
        <UserAvatar />

        <InformationForm control={control} errors={errors} />
      </Stack>

      <Button
        sx={{ display: 'block', minWidth: '160px', ml: 'auto' }}
        onClick={handleSubmit(onSubmit)}
      >
        Save Changes
      </Button>
    </>
  );
};
