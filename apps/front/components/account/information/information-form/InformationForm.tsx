import styled from '@emotion/styled';
import { AccountInformationSchema } from 'common/validation';
import { InputWithHookForm } from 'packages.rhf.inputs.input';
import { FC } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

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

    <div style={{ color: 'white' }}>Date of birthday</div>

    <InputWithHookForm
      control={control}
      name="city"
      label="City"
      variant="outlined"
      error={!!errors.city}
      helperText={errors.city?.message || ''}
    />

    <div style={{ color: 'white' }}>About Me</div>
  </Form>
);
