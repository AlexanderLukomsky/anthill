import styled from '@emotion/styled';
import { AccountInformationSchema } from 'common/validation';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { DatePicker } from 'packages.inputs.date-picker';
import { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { TextArea } from 'packages.inputs.text-area';
import { Box } from 'lib/mui';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

type InformationFormProps = {
  control: Control<AccountInformationSchema, any>;
  errors: FieldErrors<AccountInformationSchema>;
};

export const InformationForm: FC<InformationFormProps> = ({ control, errors }) => (
  <Form>
    <InputWithHookForm
      control={control}
      name="userName"
      label="Username"
      variant="outlined"
      error={!!errors.userName}
      helperText={errors.userName?.message || ''}
    />

    <InputWithHookForm
      control={control}
      name="firstName"
      label="First Name"
      variant="outlined"
      error={!!errors.firstName}
      helperText={errors.firstName?.message || ''}
    />

    <InputWithHookForm
      control={control}
      name="lastName"
      label="Last Name"
      variant="outlined"
      error={!!errors.lastName}
      helperText={errors.lastName?.message || ''}
    />

    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box sx={{ mb: '18px' }}>
          <DatePicker value={value} onChange={onChange} label="Date of birthday" />
        </Box>
      )}
      name="birthday"
    />

    <InputWithHookForm
      control={control}
      name="city"
      label="City"
      variant="outlined"
      error={!!errors.city}
      helperText={errors.city?.message || ''}
    />

    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextArea
          label="About Me"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          error={!!errors.aboutMe}
          helperText={errors.aboutMe?.message || ''}
        />
      )}
      name="aboutMe"
    />
  </Form>
);
