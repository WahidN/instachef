import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Log in'
};
