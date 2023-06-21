'use client';

import { FC } from 'react';
import { Box, BoxProps, SxProps, TextField, TextFieldProps, Typography } from '@mui/material';
import 'settings.config-muidts';
import { helperTextStyle, inputStyle, labelStyle } from './style';

export type TextAreaProps = {
  inputSx?: SxProps;
  containerProps?: BoxProps;
} & Omit<TextFieldProps, 'multiline' | 'type' | 'variant' | 'InputProps'>;

export const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  label,
  helperText,
  error = false,
  containerProps = { sx: {} },
  inputSx,
  ...props
}) => {
  const { sx: containerSx, ...restContainerProps } = containerProps;

  const { sx, ...restProps } = props;

  const style = error ? 'error' : 'base';

  return (
    <Box sx={containerSx} {...restContainerProps}>
      <TextField
        sx={{
          width: '100%',
          ...sx,
        }}
        InputLabelProps={{ shrink: true, sx: { ...labelStyle } }}
        InputProps={{ sx: { ...inputStyle.general, ...inputStyle[style] } }}
        rows={3}
        multiline
        label={label}
        value={value}
        onChange={onChange}
        {...restProps}
      />

      {helperText !== undefined && (
        <Typography
          component="p"
          variant="regular_text_14"
          sx={{ height: '18px', ...helperTextStyle[style] }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};
