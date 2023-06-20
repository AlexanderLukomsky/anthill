'use client';

import { FC, useState } from 'react';
import {
  Box,
  BoxProps,
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { EyeOnIconOutline } from 'packages.icons.eye-on-outline';
import { EyeOffIconOutline } from 'packages.icons.eye-off-outline';
import { getTextFieldStyle, helperTextStyle, inputStyle } from './style';

import 'settings.config-muidts';

export type InputProps = {
  type?: 'text' | 'password';
  variant?: 'standard' | 'outlined';
  inputSx?: SxProps;
  containerProps?: BoxProps;
} & Omit<TextFieldProps, 'multiline' | 'type' | 'variant' | 'InputProps'>;

export const Input: FC<InputProps> = ({
  value,
  onChange,
  label,
  helperText,
  type,
  error = false,
  containerProps = { sx: {} },
  variant = 'standard',
  inputSx,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const { sx: containerSx, ...restContainerProps } = containerProps;

  const { sx, ...rest } = props;

  const currentType = show ? 'text' : type;
  const currentTextFieldStyle = getTextFieldStyle(variant, error);
  const style = error ? 'error' : 'default';

  return (
    <Box sx={containerSx} {...restContainerProps}>
      <TextField
        label={label}
        type={currentType}
        variant={variant}
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiFormLabel-root': {
            color: 'light.900',
            '&.Mui-focused': {
              color: 'light.900',
            },
          },
          width: '100%',
          ...currentTextFieldStyle,
          ...sx,
        }}
        {...rest}
        InputLabelProps={{ shrink: variant === 'outlined' ? true : undefined }}
        InputProps={{
          sx: { ...inputStyle[style] },

          endAdornment: type === 'password' && (
            <InputAdornment position="end">
              <IconButton onClick={() => setShow(!show)}>
                {show && <EyeOnIconOutline sx={{ color: 'light.900' }} />}

                {!show && <EyeOffIconOutline sx={{ color: 'light.900' }} />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
