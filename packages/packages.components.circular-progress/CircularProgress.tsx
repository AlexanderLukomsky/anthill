import { FC } from 'react';

import {
  CircularProgress as MuiCircularProgress,
  Stack,
  StackProps,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

export type CircularProgressProps = {
  containerProps?: StackProps;
  progressProps?: MuiCircularProgressProps;
};

export const CircularProgress: FC<CircularProgressProps> = ({
  containerProps = { sx: {} },
  progressProps = { sx: {} },
}) => {
  const { sx: stackSx, ...restStackProps } = containerProps;
  const { sx: progressSx, ...restProgressProps } = progressProps;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'absolute',
        zIndex: 10002,
        width: '100%',
        height: '100%',
        ...stackSx,
      }}
      {...restStackProps}
    >
      <MuiCircularProgress sx={{ color: 'light.100', ...progressSx }} {...restProgressProps} />
    </Stack>
  );
};
