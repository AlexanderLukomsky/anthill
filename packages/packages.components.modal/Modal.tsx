'use client';

import { FC, ReactNode } from 'react';
import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import { CloseIcon } from 'packages.icons.close';
import { CircularProgress } from 'packages.components.circular-progress';
import { containerStyle, headStyle } from './style';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  head?: ReactNode;
  children: ReactNode;
  isLoading?: boolean;
} & Partial<MuiModalProps>;

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  head,
  children,
  isLoading,
  ...props
}) => {
  const { sx, ...restProps } = props;

  return (
    <MuiModal open={open} onClose={onClose}>
      <Stack
        sx={{
          ...containerStyle,
          ...sx,
        }}
        {...restProps}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={headStyle}
        >
          {title && (
            <>
              <Typography variant="h1">{title}</Typography>

              <IconButton sx={{ color: 'light.100' }} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </>
          )}

          {head && head}
        </Stack>

        {isLoading && <CircularProgress />}

        {children}
      </Stack>
    </MuiModal>
  );
};
