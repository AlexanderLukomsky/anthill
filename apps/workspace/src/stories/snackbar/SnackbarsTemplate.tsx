import { Stack } from '@mui/material';
import { StoryObj } from '@storybook/react';
import { Snackbar, SnackbarProps } from 'packages.components.snackbar';

import { StoryCopyButton } from 'src/components/story-copy-button';

export const SnackbarsTemplate = {
  render: ({ annotations }: { annotations: StoryObj<SnackbarProps>[] }) => (
    <>
      <StoryCopyButton path={"import { Button } from 'packages.inputs.button';"} />

      <Stack
        sx={{
          '& .MuiSnackbar-root': {
            position: 'relative',
            bottom: 'auto',
            left: 'auto',
          },
        }}
        direction="row"
        gap="10px"
        flexWrap="wrap"
      >
        {annotations.map((annotation) => (
          <Snackbar {...annotation.args} />
        ))}
      </Stack>
    </>
  ),
};
