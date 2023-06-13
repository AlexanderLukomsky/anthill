/* eslint-disable react/jsx-pascal-case */
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Stack, SvgIconProps } from '@mui/material';
import { iconContainerStyle, iconButtonStyle } from './style';
import { icons } from './data';

export const Icons = (props: SvgIconProps) => (
  <Stack direction="row" gap="5px" flexWrap="wrap">
    {icons.map((Icon) => (
      <Stack sx={iconContainerStyle}>
        <Icon.icon fontSize="medium" color="success" {...props} />

        <IconButton sx={iconButtonStyle} onClick={() => navigator.clipboard.writeText(Icon.path)}>
          <ContentCopyIcon sx={{ width: 13, height: 13 }} />
        </IconButton>
      </Stack>
    ))}
  </Stack>
);
export default {
  title: 'UI/icons',
  component: Icons,
  tags: ['autodocs'],
};
