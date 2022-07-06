import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Loader } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
  args: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => (
  <Loader />
);

export const Story = Template.bind({});
Story.args = {};
