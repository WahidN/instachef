import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Log in',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Log in',
  secondary: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Log in',
  outline: true,
};
