import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar, SnackbarProps } from 'packages.components.snackbar';
import { SnackbarsTemplate } from './SnackbarsTemplate';

const meta: Meta<SnackbarProps> = {
  title: 'UI/SnackBar',
  component: Snackbar,
  tags: ['autodocs'],
};

type Story = StoryObj<SnackbarProps>;

export const SnackBar: Story = {
  args: {
    open: true,
    message: 'Example success snackbar',
    severity: 'success',
  },
};

const ErrorSnackbar: Story = {
  args: {
    open: true,
    message: 'Example error snackbar',
    severity: 'error',
  },
};

export const SnackBars = {
  ...SnackbarsTemplate,
  args: {
    annotations: [SnackBar, ErrorSnackbar],
  },
};

export default meta;
