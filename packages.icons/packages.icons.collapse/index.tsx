'use client';

import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CollapseIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2zm-9 4H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"
      data-name="collapse"
      fillRule="evenodd"
    />
  </SvgIcon>
);
