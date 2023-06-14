import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FC } from 'react';
import { iconButtonStyle, iconStyle } from './style';

export type StoryCopyButtonProps = { size?: 'small' | 'large'; path: string };

export const StoryCopyButton: FC<StoryCopyButtonProps> = ({ size = 'large', path }) => (
  <IconButton
    sx={{ ...iconButtonStyle.default, ...iconButtonStyle[size] }}
    onClick={() => navigator.clipboard.writeText(path)}
  >
    <ContentCopyIcon sx={iconStyle[size]} />
  </IconButton>
);
