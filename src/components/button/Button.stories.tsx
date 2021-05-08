import React from 'react';
import Button from './Button';
import { ButtonTypes } from './Button.types';

export default {
  title: 'Component/Button',
  component: Button,
};

const Template = (args: {}) => (
  <Button {...args} />
);

const props = {
  regular: (): ButtonTypes => ({
      className: ''
  }),
};

export const ButtonStory: any = Template.bind({});
const defaultProps = props.regular();
ButtonStory.storyName = 'Default';
ButtonStory.args = {
  ...defaultProps,
};
