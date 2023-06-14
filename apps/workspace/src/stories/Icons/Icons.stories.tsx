/* eslint-disable react/jsx-pascal-case */

import { Stack, SvgIconProps } from '@mui/material';
import { StoryCopyButton } from 'src/components/story-copy-button';
import { Meta } from '@storybook/react';
import { iconContainerStyle } from './style';
import { icons } from './data';

export const Icons = (props: SvgIconProps) => (
  <Stack direction="row" gap="5px" flexWrap="wrap">
    {icons.map((Icon, index) => (
      <Stack key={index} sx={iconContainerStyle}>
        <Icon.icon {...props} />

        <StoryCopyButton size="small" path={Icon.path} />
      </Stack>
    ))}
  </Stack>
);

const meta: Meta<SvgIconProps> = {
  title: 'UI/Icons',
  component: Icons,
  tags: ['autodocs'],
  args: {
    fontSize: 'medium',
    color: 'success',
  },
};

export default meta;
