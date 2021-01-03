import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, Props } from '.'

export default {
  title: 'Text',
  component: Text
} as Meta

const Template: Story<Props> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: "hello"
}
