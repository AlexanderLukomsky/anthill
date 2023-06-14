/* eslint-disable react/jsx-pascal-case */

import { Stack, SvgIconProps } from '@mui/material';
import { StoryCopyButton } from 'src/components/story-copy-button';
import { iconContainerStyle } from './style';
import { icons } from './data';

export const Icons = (props: SvgIconProps) => (
  <Stack direction="row" gap="5px" flexWrap="wrap">
    {icons.map((Icon) => (
      <Stack sx={iconContainerStyle}>
        <Icon.icon fontSize="medium" color="success" {...props} />

        <StoryCopyButton size="small" path={Icon.path} />
      </Stack>
    ))}
  </Stack>
);
export default {
  title: 'UI/icons',
  component: Icons,
  tags: ['autodocs'],
};
