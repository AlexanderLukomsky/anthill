'use client';

import { FC } from 'react';
import { ButtonProps as MuiButtonProps, Button as MuiButton, Typography } from '@mui/material';
import { colorStyle, disabledStyle, sizeStyle } from './style';

export type ButtonProps = {
  size?: 'large' | 'medium';
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'light' | 'danger';
} & Omit<MuiButtonProps, 'color' | 'size'>;

export const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'contained',
  color = 'primary',
  onClick,
  children,
  ...props
}) => {
  const { sx, ...restProps } = props;

  return (
    <MuiButton
      sx={{
        textTransform: 'none',
        '&:disabled': disabledStyle[variant],
        ...sizeStyle[size],
        ...colorStyle[color][variant],
        ...sx,
      }}
      onClick={onClick}
      variant={variant}
      {...restProps}
    >
      <Typography variant="h3">{children}</Typography>
    </MuiButton>
  );
};
