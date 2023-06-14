import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from 'packages.inputs.button';
import { ButtonsTemplate } from '../ButtonsTemplate';

const meta: Meta<ButtonProps> = {
  title: 'UI/buttons/ButtonText',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button Contained',
    variant: 'text',
  },
};

export const Example: Story = {
  args: {
    children: 'Button Contained',
    variant: 'text',
  },
};

const Danger: Story = {
  args: {
    color: 'danger',
    children: 'Button Contained',
    variant: 'text',
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button Contained',
    variant: 'text',
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
