import { Typography, Stack } from 'lib/mui';
import Link from 'next/link';
import React from 'react';
import { headerStyle } from './style';

export const BasicHeader = () => (
  <Stack sx={headerStyle}>
    <Link href="/">
      <Typography variant="large" sx={{ color: 'light.100' }}>
        Anthill
      </Typography>
    </Link>
  </Stack>
);
