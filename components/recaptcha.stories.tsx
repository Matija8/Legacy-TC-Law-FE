import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReCaptcha } from './recaptcha';

export default {
  title: 'ReCaptcha',
  component: ReCaptcha,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReCaptcha>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReCaptcha> = (args) => (
  <ReCaptcha {...args}></ReCaptcha>
);

export const Default = Template.bind({});
Default.args = { sitekey: 'TODO' };
