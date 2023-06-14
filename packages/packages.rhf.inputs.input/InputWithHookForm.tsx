'use client';

import { BoxProps, SxProps } from '@mui/material';
import { Input } from 'packages.inputs.input';
import { ChangeEvent } from 'react';
import { FieldValues, Control, Path, UseFormClearErrors, useController } from 'react-hook-form';

export type InputWithHookFormProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  clearErrors?: UseFormClearErrors<T>;
  label?: string;
  type?: 'text' | 'password';
  error?: boolean;
  helperText?: string;
  sx?: SxProps;
  containerProps?: BoxProps;
};

export const InputWithHookForm = <T extends FieldValues>({
  control,
  name,
  clearErrors,
  label,
  type,
  error,
  helperText,
  sx,
  containerProps,
}: InputWithHookFormProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (clearErrors) {
      clearErrors(name);
    }
  };

  return (
    <Input
      onChange={handleChange}
      value={value}
      name={name}
      label={label}
      type={type}
      error={error}
      helperText={helperText}
      sx={sx}
      containerProps={containerProps}
    />
  );
};
