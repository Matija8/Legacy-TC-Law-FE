import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundBtn } from './round-btn';

export default {
  title: 'Round-Button',
  component: RoundBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RoundBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundBtn> = (args) => (
  <RoundBtn {...args}>Button</RoundBtn>
);

export const Default = Template.bind({});
Default.args = {};

export const NoHoverOpacity = Template.bind({});
NoHoverOpacity.args = {
  hoverEffects: false,
};

export const NoTranslateOnClick = Template.bind({});
NoTranslateOnClick.args = {
  translate: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
