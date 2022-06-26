import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  args: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Email = Template.bind({});
Email.args = {
  label: 'E-mail',
  type: 'email',
  placeholder: 'Fill in your mail',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'E-mail',
  type: 'email',
  placeholder: 'Fill in your mail',
  disabled: true,
};
