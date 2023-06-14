import { Stack } from '@mui/material';
import { StoryObj } from '@storybook/react';
import { Button, ButtonProps } from 'packages.inputs.button';

import { StoryCopyButton } from 'src/components/story-copy-button';

export const ButtonsTemplate = {
  render: ({ annotations }: { annotations: StoryObj<ButtonProps>[] }) => (
    <>
      <StoryCopyButton path={"import { Button } from 'packages.inputs.button';"} />

      <Stack direction="row" gap="10px" flexWrap="wrap">
        {annotations.map((annotation) => (
          <Button {...annotation.args} />
        ))}
      </Stack>
    </>
  ),
};
