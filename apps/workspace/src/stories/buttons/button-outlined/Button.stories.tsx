import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from 'packages.inputs.button';
import { ButtonsTemplate } from '../ButtonsTemplate';

const meta: Meta<ButtonProps> = {
  title: 'UI/buttons/ButtonOutlined',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button Contained',
    variant: 'outlined',
  },
};

export const Example: Story = {
  args: {
    children: 'Button Contained',
    variant: 'outlined',
  },
};

const Danger: Story = {
  args: {
    color: 'danger',
    children: 'Button Contained',
    variant: 'outlined',
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button Contained',
    variant: 'outlined',
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
