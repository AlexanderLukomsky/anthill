import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from 'packages.inputs.button';
import { ButtonsTemplate } from '../ButtonsTemplate';

const meta: Meta<ButtonProps> = {
  title: 'UI/buttons/ButtonContained',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button Contained',
    variant: 'contained',
  },
};

export const Example: Story = {
  args: {
    children: 'Button Contained',
    variant: 'contained',
  },
};

const Danger: Story = {
  args: {
    color: 'danger',
    children: 'Button Contained',
    variant: 'contained',
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button Contained',
    variant: 'contained',
  },
};

type Story = StoryObj<ButtonProps>;

export const Buttons = {
  ...ButtonsTemplate,
  args: {
    annotations: [Example, Danger, Disabled],
  },
};

export default meta;
