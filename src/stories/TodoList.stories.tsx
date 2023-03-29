import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { TodoList } from '../app/components/TodoList';

export default {
  title: 'TodoList',
  component: TodoList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const NoArgs = Template.bind({});
export const SomeArgs = Template.bind({});